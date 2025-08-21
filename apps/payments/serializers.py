from rest_framework import serializers

from .models import PaymentOption


class PaymentOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentOption
        fields = [
            "title",
            "description",
            "currency",
            "details",
        ]
