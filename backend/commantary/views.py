from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Commantary
from .serializers import CommantarySerializer


class CommantaryApiView(APIView):
    def get(self, request, pub_id, format=None):
        comments = Commantary.objects.filter(pk=pub_id)
        serializer = CommantarySerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CommantarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @classmethod
    def get_extra_actions(cls):
        return []
