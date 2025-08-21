from django.urls import path

from .views import MemberListView, AwardListView

urlpatterns = [
    path("team/", MemberListView.as_view(), name="member-list"),
    path("awards/", AwardListView.as_view(), name="award-list"),
]
