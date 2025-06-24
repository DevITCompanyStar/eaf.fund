from rest_framework import generics, status
from rest_framework.response import Response

from .models import Program, Category
from .serializers import (
    ProgramSerializer,
    CategorySerializer,
    ProgramDetailSerializer,
)


class ProgramListView(generics.ListAPIView):
    serializer_class = ProgramSerializer

    def get_queryset(self):
        queryset = Program.objects.all()
        category_slug = self.request.query_params.get("category", None)
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)

        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class ProgramDetailView(generics.RetrieveAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramDetailSerializer


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
