from modeltranslation.translator import register, TranslationOptions
from .models import (
    Category,
    Program,
    Purpose,
    HowWeWork
)


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ("title",)


@register(Program)
class ProgramTranslationOptions(TranslationOptions):
    fields = ("title", "subtitle", "support_text", "description")


@register(Purpose)
class PurposeTranslationOptions(TranslationOptions):
    fields = ("description",)


@register(HowWeWork)
class HowWeWorkTranslationOptions(TranslationOptions):
    fields = ("description",)
