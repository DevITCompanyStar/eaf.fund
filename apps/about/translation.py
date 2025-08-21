from modeltranslation.translator import register, TranslationOptions
from .models import Member, Award


@register(Member)
class MemberTranslationOptions(TranslationOptions):
    fields = ("position", "name",)


@register(Award)
class AwardTranslationOptions(TranslationOptions):
    fields = ("title",)
