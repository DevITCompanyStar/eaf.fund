from django.contrib import admin
from nested_inline.admin import NestedStackedInline

from .models import (
    Program,
    Purpose,
    Category,
    HowWeWork,
    ProgramImage,
)


class DecadeBornListFilter(admin.SimpleListFilter):
    title = "Categories"
    parameter_name = "category"

    def lookups(self, request, model_admin):
        return [
            (category.slug, f"– {category.title}") for category in Category.objects.all()
        ]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(category__slug=self.value())
        return queryset


class PurposeImageInline(NestedStackedInline):
    model = Purpose
    extra = 0


class HowWeWorkImageInline(NestedStackedInline):
    model = HowWeWork
    extra = 0


class ProgramImageImageInline(NestedStackedInline):
    model = ProgramImage
    extra = 0


@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "created_at")
    search_fields = ("title", "description")
    list_filter = (DecadeBornListFilter,)
    inlines = (
        PurposeImageInline,
        HowWeWorkImageInline,
        ProgramImageImageInline,
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "created_at")
    readonly_fields = ("slug",)
