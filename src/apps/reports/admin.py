from django.contrib import admin
from nested_inline.admin import NestedStackedInline

from .models import Report, ReportImage


class ReportImageInline(NestedStackedInline):
    model = ReportImage
    extra = 0


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    pass
    inlines = [ReportImageInline]
