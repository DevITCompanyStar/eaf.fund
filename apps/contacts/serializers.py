from rest_framework import serializers

from .models import (
    Contact,
    VolunteerApplication,
    ContactMessage,
    PartnershipApplication
)


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
            "social_links",
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


class PartnershipApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnershipApplication
        fields = [
            "name",
            "company_name",
            "email",
            "phone_number",
            "social_links",
            "company_info"
        ]
