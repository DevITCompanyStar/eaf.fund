from rest_framework import serializers

from .models import Contact, VolunteerApplication, ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = [
            "location",
            "location_url",
            "email",
            "phone_number",
            "facebook",
            "twitter",
            "instagram",
            "youtube",
            "tiktok",
            "viber",
            "whatsapp",
            "telegram",
        ]


class VolunteerApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerApplication
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "social_link",
        ]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "first_name",
            "email",
            "phone_number",
            "message",
        ]
