from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Contact(models.Model):
    location = models.CharField(
        max_length=255,
        blank=True,
        null=True,
    )
    location_url = models.URLField(
        blank=True,
        null=True,
        help_text="The URL to the location from Google Maps",
    )
    phone_number = PhoneNumberField()
    email = models.EmailField()
    facebook = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    youtube = models.URLField(blank=True, null=True)
    tiktok = models.URLField(blank=True, null=True)
    viber = models.URLField(blank=True, null=True)
    whatsapp = models.URLField(blank=True, null=True)
    telegram = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.email if self.email else ""


class VolunteerApplication(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    use_viber = models.BooleanField(default=False)
    use_whatsapp = models.BooleanField(default=False)
    use_telegram = models.BooleanField(default=False)
    no_social = models.BooleanField(default=False)
    social_link = models.URLField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-submitted_at"]
        verbose_name = "Volunteer Application"
        verbose_name_plural = "Volunteers Application"

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    message = models.TextField()
    contacted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-contacted_at"]
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"Message from {self.first_name}"
