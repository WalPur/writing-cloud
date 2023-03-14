from rest_framework import viewsets


from .models import Publication

from .serializers import PublicationsSerializer


class PublicationsEndpoint(viewsets.ModelViewSet):
    http_method_names = ["get", "patch", "delete", "post"]
    serializer_class = PublicationsSerializer

    def get_queryset(self):
        return Publication.objects.all()
