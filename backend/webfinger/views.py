from django.http import HttpResponse,JsonResponse
from xrd import XRD, Link, Element
import re
import datetime

from  .rel import *


ACCT_RE = re.compile(
    r'(?:acct:)?(?P<userinfo>[\w.!#$%&\'*+-/=?^_`{|}~]+)@(?P<host>[\w.:-]+)'
)


def _force_list(v):
    if v is not None:
        if isinstance(v, (list, tuple)):
            return v
        return [v]


class Acct(object):
    def __init__(self, acct):
        m = ACCT_RE.match(acct)
        if not m:
            raise ValueError('invalid acct format')
        (userinfo, host) = m.groups()
        self.userinfo = userinfo
        self.host = host

    def __unicode__(self):
        return u"acct:%s@%s" % (self.userinfo, self.host)


class XRDResponse(HttpResponse):

    def __init__(self, subject=None, **kwargs):
        content_type = 'application/xrd+xml'
        super(XRDResponse, self).__init__(content_type=content_type, **kwargs)
        self._xrd = XRD()

    def __iter__(self):
        content = self._xrd.to_xml()
        xml = content.toprettyxml(indent='  ')
        expr = re.compile(r'>\n\s+([^<>\s].*?)\n\s+</', re.DOTALL)
        content = expr.sub(r'>\g<1></', xml)
        self._iterator = iter((content),)
        return self



def handler(request, acct, xrd):
        # acct.userinfo is the username
        # acct.host is the host
    xrd.aliases.append('http://example.com/profile/%s/' % acct.userinfo)
    xrd.expires = datetime.datetime.utcnow() + datetime.timedelta(0, 10)
    xrd.links.append(Link(
        rel=AUTHOR,
        href='http://jeremy.carbauja.com',
        type_='text/html',
    ))


LUMEN_XRD = """<?xml version='1.0' encoding='UTF-8'?>
<XRD xmlns='http://docs.oasis-open.org/ns/xri/xrd-1.0'>
 
    <Subject>acct:lumen@lumenwrites.com</Subject>
    <Alias>https://lumenwrites.com/</Alias>
 
    <Link rel="http://schemas.google.com/g/2010#updates-from"
          type="application/atom+xml"
          href="https://lumenwrites.com/@lumen.atom" />
    <Link rel="http://activitystrea.ms/spec/1.0"
          type="application/atom+xml"
          href="https://lumenwrites.com/@lumen.atom" />

    <Link rel="http://webfinger.net/rel/profile-page"
          type="application/atom+xml"
          href="https://lumenwrites.com/@lumen" />

</XRD>
"""
LUMEN_JSON = {
    "subject": "acct:lumen@lumenwrites.com",
    "aliases": [
        "https://lumenwrites.com",
    ],
    "links": [
        {
            "rel": "http://webfinger.net/rel/profile-page",
            "type": "text/html",
            "href": "https://lumenwrites.com"
        },
        {
            "rel": "http://activitystrea.ms/spec/1.0",
            "type": "application/atom+xml",
            "href": "https://lumenwrites.com/@lumen.atom"
        },
        {
            "rel": "http://schemas.google.com/g/2010#updates-from",
            "type": "application/atom+xml",
            "href": "https://lumenwrites.com/@lumen.atom"            
        }
    ]
}

        # {
        #     "rel": "salmon",
        #     "href": "https://quitter.no/main/salmon/user/10278"
        # },
        # {
        #     "rel": "http://salmon-protocol.org/ns/salmon-replies",
        #     "href": "https://quitter.no/main/salmon/user/10278"
        # },
        # {
        #     "rel": "http://salmon-protocol.org/ns/salmon-mention",
        #     "href": "https://quitter.no/main/salmon/user/10278"
        # }
def endpoint(request, uri=""):
    # acct = Acct(uri)
    # response = XRDResponse(subject=acct)
    # handler(request, acct, response._xrd)
    response = LUMEN_XRD
    return HttpResponse(response)
    # response = LUMEN_JSON
    # return JsonResponse(response)


HARDCODED_HOST_META = """<?xml version='1.0' encoding='UTF-8'?>
<XRD xmlns='http://docs.oasis-open.org/ns/xri/xrd-1.0'
     xmlns:hm='http://host-meta.net/xrd/1.0'>
 
    <hm:Host>lumenwrites.com</hm:Host>
 
    <Link rel='lrdd'
          template='https://lumenwrites.com/.well-known/webfinger?resource={uri}'>
        <Title>Profile</Title>
    </Link>
</XRD>
"""

#  template=’http://lumenwrites.com/.well-known/webfinger?resource=acct:{uri}'>
HOST_META_JSON = {
    "links": [
        {
            "rel": "lrdd",
            "type": "application/jrd+json",
            "template": "http://lumenwrites.com/.well-known/webfinger?resource=acct:{uri}"
        },
        {
            "rel": "lrdd",
            "type": "application/json",
            "template": "http://lumenwrites.com/.well-known/webfinger?resource=acct:{uri}"
        },
        {
            "rel": "lrdd",
            "type": "application/xrd+xml",
            "template": "http://lumenwrites.com/.well-known/webfinger?resource=acct:{uri}"
        }
    ]
}

def host_meta(request):
    response = HARDCODED_HOST_META
    return HttpResponse(response)
    # response = HOST_META_JSON
    # return JsonResponse(response)

