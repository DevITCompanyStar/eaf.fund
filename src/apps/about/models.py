from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Member(models.Model):
    image = models.ImageField(upload_to="images/members/", null=True, blank=True)
    position = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    instagram = models.CharField(max_length=50, null=True, blank=True)
    telegram = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Member"
        verbose_name_plural = "Members"

    def __str__(self):
        return f"{self.name} ({self.position})"


class Award(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="images/awards/")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Award"
        verbose_name_plural = "Awards"

    def __str__(self):
        return self.title
