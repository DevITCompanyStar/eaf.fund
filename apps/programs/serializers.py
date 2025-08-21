from rest_framework import serializers

from .models import (
    Program,
    Purpose,
    Category,
    HowWeWork,
    ProgramImage
)


class ProgramImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramImage
        fields = ["image", "title"]


class PurposeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purpose
        fields = ["description"]


class HowWeWorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = HowWeWork
        fields = ["description"]


class ProgramSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Program
        fields = [
            "id",
            "image",
            "title",
            "subtitle",
        ]

    def get_image(self, obj):
        image = obj.images.first()
        if image:
            return image.image.url
        return None


class ProgramDetailSerializer(ProgramSerializer):
    images = ProgramImageSerializer(many=True)
    purposes = PurposeSerializer(many=True)
    how_we_work = HowWeWorkSerializer(many=True)

    class Meta:
        model = Program
        fields = [
            "title",
            "support_text",
            "description",
            "purposes",
            "how_we_work",
            "images",
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["slug", "title"]
