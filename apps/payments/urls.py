from django.urls import path

from .views import PaymentsOptionView

urlpatterns = [
    path("payments/options/", PaymentsOptionView.as_view(), name="payment_options")
]
