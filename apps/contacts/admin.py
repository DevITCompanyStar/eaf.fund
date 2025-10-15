from django.contrib import admin

from .models import (
    Contact,
    VolunteerApplication,
    ContactMessage,
    PartnershipApplication
)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("email", "phone_number", "location")


@admin.register(VolunteerApplication)
class VolunteerApplicationAdmin(admin.ModelAdmin):
    list_display = ("first_name", "last_name", "email", "phone_number", "submitted_at")
    search_fields = ("first_name", "last_name", "email", "phone_number")
    readonly_fields = ("submitted_at",)
    list_filter = ("submitted_at",)


@admin.register(PartnershipApplication)
class PartnershipApplicationAdmin(admin.ModelAdmin):
    list_display = ("name", "company_name", "email", "phone_number", "submitted_at")
    search_fields = ("name", "company_name", "email", "phone_number")
    readonly_fields = ("submitted_at",)
    list_filter = ("submitted_at",)


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("first_name", "email", "phone_number", "message", "contacted_at")
    search_fields = ("first_name", "email", "phone_number", "message")
    readonly_fields = ("contacted_at",)
    list_filter = ("contacted_at",)
