from rest_framework import serializers

from .models import Report, ReportImage, ReportVideo


class ReportImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportImage
        fields = ["image"]


class ReportVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportVideo
        fields = ["video"]


class ReportSerializer(serializers.ModelSerializer):
    images = ReportImageSerializer(many=True)
    videos = ReportVideoSerializer(many=True)

    class Meta:
        model = Report
        fields = [
            "id",
            "title",
            "preview_image",
            "short_description",
            "description1",
            "description2",
            "description_image",
            "images",
            "videos",
            "event_date"
        ]
