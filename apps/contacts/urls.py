from django.urls import path

from .views import (
    ContactListView,
    ContactMessageCreateView,
    VolunteerApplicationCreateView,
    PartnershipApplicationCreateView
)

urlpatterns = [
    path("contacts/", ContactListView.as_view(), name="contact-list"),
    path(
        "contacts/volunteer-applications/",
        VolunteerApplicationCreateView.as_view(),
        name="volunteer-application-create",
    ),
    path(
        "contacts/contact-messages/",
        ContactMessageCreateView.as_view(),
        name="contact-message-create",
    ),
    path(
        "contacts/partnership-applications/",
        PartnershipApplicationCreateView.as_view(),
        name="partnership-application-create"
    ),
]
