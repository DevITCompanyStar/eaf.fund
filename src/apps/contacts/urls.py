from django.urls import path

from .views import (
    ContactListView,
    VolunteerApplicationCreateView,
    ContactMessageCreateView
)

urlpatterns = [
    path("contacts/", ContactListView.as_view(), name="contact-list"),
    path("contacts/volunteer-applications/", VolunteerApplicationCreateView.as_view(), name="volunteer-application-create"),
    path("contacts/contact-messages/", ContactMessageCreateView.as_view(), name="contact-message-create"),
]
