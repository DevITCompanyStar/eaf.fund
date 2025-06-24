from django.urls import path

from .views import (
    ProgramListView,
    ProgramDetailView,
    CategoryListView
)

urlpatterns = [
    path("programs/", ProgramListView.as_view(), name="program-list"),
    path("programs/<int:pk>/", ProgramDetailView.as_view(), name="program-detail"),
    path("programs/categories/", CategoryListView.as_view(), name="category-list"),

]
