from django.contrib import admin

from .models import  Post


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('body',), }
    search_fields = ['body']

admin.site.register(Post, PostAdmin)
