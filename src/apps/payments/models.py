from ckeditor.fields import RichTextField
from django.db import models


class PaymentOption(models.Model):
    title = models.CharField(max_length=100, blank=True, null=True)
    description = RichTextField(blank=True, null=True)
    currency = models.CharField(max_length=50, blank=True, null=True)
    details = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Payment Method"
        verbose_name_plural = "Payment Methods"

    def __str__(self):
        return self.title
