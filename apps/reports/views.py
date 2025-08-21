from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination

from .models import Report
from .serializers import ReportSerializer


class ReportListView(generics.ListAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    pagination_class = LimitOffsetPagination

    def list(self, request, *args, **kwargs):
        paginator = self.pagination_class()
        paginator.default_limit = self.request.query_params.get("limit", 10)
        result = paginator.paginate_queryset(self.get_queryset(), request)
        serializer = self.get_serializer(
            instance=result,
            many=True,
            context={"request": request}
        )

        return paginator.get_paginated_response(serializer.data)


class ReportDetailView(generics.RetrieveAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
