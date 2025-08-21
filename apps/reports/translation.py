from modeltranslation.translator import register, TranslationOptions
from .models import Report


@register(Report)
class ReportTranslationOptions(TranslationOptions):
    fields = ("title", "description")
