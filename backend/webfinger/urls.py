from django.conf.urls import url

from .views import endpoint, host_meta

urlpatterns = [
    # url(r'^(?P<uri>.+)/$', endpoint, name='webfinger_endpoint'),

    # Hardcoded webfinger for testing
    url(r'^host-meta$', host_meta, name='host_meta'),

    # ?resource=acct:lumen@lumenwrites.com
    url(r'^webfinger$',
        endpoint, name='webfinger_endpoint'),        
]
