from rest_framework import permissions
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response


from .models import User
from .serializers import UserSerializer


class CreateUserView(CreateAPIView):
    model = User
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer


class UserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
