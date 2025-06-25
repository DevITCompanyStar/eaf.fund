from modeltranslation.translator import register, TranslationOptions
from .models import PaymentOption


@register(PaymentOption)
class PaymentOptionTranslationOptions(TranslationOptions):
    fields = ("title", "description", "currency")
