from django.urls import path

from .views import CreateUserView, UserView


urlpatterns = [
    path("create", CreateUserView.as_view()),
    path("retrieve", UserView.as_view()),
]
