from rest_framework.routers import DefaultRouter

from .views import PublicationsEndpoint


router = DefaultRouter()
router.register("", PublicationsEndpoint, basename="pulication")


urlpatterns = [] + router.urls
