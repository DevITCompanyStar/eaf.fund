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
            "use_viber",
            "use_whatsapp",
            "use_telegram",
            "no_social",
            "social_link",
        ]

    def validate(self, attrs):
        use_viber = attrs.get("use_viber")
        use_whatsapp = attrs.get("use_whatsapp")
        use_telegram = attrs.get("use_telegram")
        no_social = attrs.get("no_social")

        if no_social and (use_viber or use_whatsapp or use_telegram):
            raise serializers.ValidationError(
                "If 'No social networks for communication' is selected, other social network options must not be selected."
            )

        return attrs


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "first_name",
            "email",
            "phone_number",
            "message",
        ]
