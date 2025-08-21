from django.contrib import admin

from .models import Member, Award


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "position",
        "email",
        "phone_number",
        "created_at"
    )


@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")
