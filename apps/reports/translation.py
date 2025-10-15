from modeltranslation.translator import register, TranslationOptions
from .models import Report


@register(Report)
class ReportTranslationOptions(TranslationOptions):
    fields = ("title", "short_description", "description1", "description2")
