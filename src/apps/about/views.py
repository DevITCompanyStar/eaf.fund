from rest_framework import generics

from .models import Member, Award
from .serializers import MemberSerializer, AwardSerializer


class MemberListView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


class AwardListView(generics.ListAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer
