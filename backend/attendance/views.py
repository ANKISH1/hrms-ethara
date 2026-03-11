from django.shortcuts import render
from rest_framework import generics
from .serializers import AttendanceSerializer
from .models import Attendance

# Create your views here.
class AttendanceListCreateViewAPI(generics.ListCreateAPIView):
    serializer_class = AttendanceSerializer
    
    def get_queryset(self):
        queryset = Attendance.objects.all()
        emp = self.request.query_params.get('emp')
        if emp:
            queryset = queryset.filter(emp = emp)

        date = self.request.query_params.get('date')
        if date:
            queryset = queryset.filter(date = date)

        return queryset        
