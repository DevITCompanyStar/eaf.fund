from rest_framework import serializers

from .models import Report, ReportImage


class ReportImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportImage
        fields = ["image", "title"]


class ReportSerializer(serializers.ModelSerializer):
    images = ReportImageSerializer(many=True)

    class Meta:
        model = Report
        fields = [
            "title",
            "description",
            "images",
            "event_date"
        ]
