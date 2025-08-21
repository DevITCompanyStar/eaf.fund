from rest_framework import generics
from .models import PaymentOption
from .serializers import PaymentOptionSerializer


class PaymentsOptionView(generics.ListAPIView):
    queryset = PaymentOption.objects.all()
    serializer_class = PaymentOptionSerializer
