from django.contrib import admin
from nested_inline.admin import NestedStackedInline

from .models import Report, ReportImage, ReportVideo


class ReportImageInline(NestedStackedInline):
    model = ReportImage
    extra = 0


class ReportVideoInline(NestedStackedInline):
    model = ReportVideo
    extra = 0


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ("title", "short_description", "event_date")
    search_fields = ("title", "description")
    list_filter = ("event_date",)
    inlines = [ReportImageInline, ReportVideoInline]
