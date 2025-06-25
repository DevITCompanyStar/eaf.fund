from django.contrib import admin

from .models import PaymentOption


@admin.register(PaymentOption)
class PaymentMethodAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "currency", "details")
