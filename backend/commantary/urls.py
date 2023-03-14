from django.urls import path
from rest_framework.routers import DefaultRouter
from django.urls import path, include

from .views import CommantaryApiView

router = DefaultRouter()

router.register("", CommantaryApiView, basename="comments")

urlpatterns = [
    path("", include(router.urls))
    # path("<int:pub_id>/", CommantaryApiView.as_view()),
]
