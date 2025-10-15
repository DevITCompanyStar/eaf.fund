from rest_framework import generics

from .models import (
    Contact,
    VolunteerApplication,
    ContactMessage,
    PartnershipApplication
)
from .serializers import (
    ContactSerializer,
    ContactMessageSerializer,
    VolunteerApplicationSerializer,
    PartnershipApplicationSerializer
)


class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class VolunteerApplicationCreateView(generics.CreateAPIView):
    queryset = VolunteerApplication.objects.all()
    serializer_class = VolunteerApplicationSerializer


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


class PartnershipApplicationCreateView(generics.CreateAPIView):
    queryset = PartnershipApplication.objects.all()
    serializer_class = PartnershipApplicationSerializer
