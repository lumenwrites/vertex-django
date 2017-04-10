from django.http import HttpResponse
from markdown import Markdown
from django.contrib.syndication.views import Feed
from django.utils.feedgenerator import Atom1Feed

from .models import Post
from core.models import Settings

class MainFeed(Feed):
    try:
        settings = Settings.objects.all().first()

        base_url = "http://lumenwrites.com"
    
        title = settings.title + " latest posts"
        link = base_url
        description = settings.description
        # feed_type = Atom1Feed
    
        def items(self):
            return Post.objects.filter(published=True).order_by('-pub_date')[:25]
    
        # def item_title(self, item):
        #     return item.title
    
        def item_link(self, item):
            return self.base_url + "/post/" + item.slug
    
        def item_pubdate(self, item):
            return item.pub_date
    
        def item_description(self, item):
            md = Markdown()
            return md.convert(item.body)
    except:
        pass



HARDCODED_ATOM = '''<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:thr="http://purl.org/syndication/thread/1.0" xmlns:activity="http://activitystrea.ms/spec/1.0/" xmlns:poco="http://portablecontacts.net/spec/1.0" xmlns:media="http://purl.org/syndication/atommedia" xmlns:ostatus="http://ostatus.org/schema/1.0" xmlns:mastodon="http://mastodon.social/schema/1.0">
  <id>http://lumenwrites.com/feed/posts.atom</id>
  <title>lumenwrites</title>
  <subtitle>Startup Founder, Web Developer, Writer.</subtitle>
  <updated>2017-04-10T13:59:49Z</updated>
  <logo>https://hackertribe.io/system/accounts/avatars/000/000/001/original/110a57854142aa34.png?1491471642</logo>
  <author>
    <id>http://lumenwrites.com</id>
    <activity:object-type>http://activitystrea.ms/schema/1.0/person</activity:object-type>
    <uri>http://lumenwrites.com</uri>
    <name>lumenwrites</name>
    <email>lumen@lumenwrites.com</email>
    <summary>Startup Founder, Web Developer, Writer.</summary>
    <link rel="alternate" type="text/html" href="https://hackertribe.io/@rayalez"/>
    <link rel="avatar" type="image/png" media:width="120" media:height="120" href="https://hackertribe.io/system/accounts/avatars/000/000/001/original/110a57854142aa34.png?1491471642"/>
    <link rel="header" type="image/jpeg" media:width="700" media:height="335" href="https://hackertribe.io/system/accounts/headers/000/000/001/original/c7cb6b5c72b241c9.jpg?1491471643"/>
    <poco:preferredUsername>rayalez</poco:preferredUsername>
    <poco:displayName>rayalez &#x2705;</poco:displayName>
    <poco:note>Startup Founder, Web Developer, Writer.</poco:note>
    <mastodon:scope>public</mastodon:scope>
  </author>
  <link rel="alternate" type="text/html" href="https://hackertribe.io/@rayalez"/>
  <link rel="self" type="application/atom+xml" href="http://lumenwrites.com/feed/posts.atom"/>
  <link rel="next" type="application/atom+xml" href="http://lumenwrites.com/feed/posts.atom"/>
  <link rel="hub" href="https://hackertribe.io/api/push"/>
  <link rel="salmon" href="https://hackertribe.io/api/salmon/1"/>
  <entry>
    <id>tag:hackertribe.io,2017-04-10:objectId=24291:objectType=Status</id>
    <published>2017-04-10T13:45:10Z</published>
    <updated>2017-04-10T13:45:10Z</updated>
    <title>I want to build a very simple blog that can federate with #Mastodon. Just so ...</title>
    <content type="html">Hello</content>
    <activity:verb>http://activitystrea.ms/schema/1.0/post</activity:verb>
    <link rel="self" type="application/atom+xml" href="https://hackertribe.io/users/rayalez/updates/594.atom"/>
    <link rel="alternate" type="text/html" href="https://hackertribe.io/users/rayalez/updates/594"/>
    <activity:object-type>http://activitystrea.ms/schema/1.0/note</activity:object-type>
    <mastodon:scope>public</mastodon:scope>
  </entry>
</feed>
'''
    

def atom_feed(request):
    response = HARDCODED_ATOM
    return HttpResponse(response)
