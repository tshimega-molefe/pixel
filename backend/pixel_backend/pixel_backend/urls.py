# pixel_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from .views import home

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/auth/", include("dj_rest_auth.urls")
    ),  # Endpoint provided by dj_rest_auth
    path(
        "api/social/login/", include("pixel_auth.urls")
    ),  # Endpoint provided by pixel_auth
    path("", home),
]
