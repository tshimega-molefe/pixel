from django.shortcuts import render

# Create your views here.
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from django.conf import settings


class GoogleLoginView(SocialLoginView):
    authentication_classes = (
        []
    )  # Disable authentication, make sure to override 'allowed origins' in settings.py in production
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:3000"
    client_class = OAuth2Client
