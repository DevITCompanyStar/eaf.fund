from rest_framework import serializers

from .models import Member, Award


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = [
            "image",
            "position",
            "name",
            "email",
            "phone_number",
            "instagram",
            "telegram",
        ]


class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ["title", "image"]
