from django.contrib import admin

from .models import Contact, VolunteerApplication, ContactMessage


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("email", "phone_number", "location")


@admin.register(VolunteerApplication)
class VolunteerApplicationAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "phone_number", "submitted_at")
    search_fields = ("first_name", "last_name", "email", "phone_number")
    list_filter = ("submitted_at",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("first_name", "email", "phone_number", "message", "contacted_at")
    search_fields = ("first_name", "email", "phone_number", "message")
    list_filter = ("contacted_at",)
