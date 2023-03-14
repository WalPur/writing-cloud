from rest_framework import serializers

from .models import Commantary


class CommantarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Commantary
        fields = "__all__"
