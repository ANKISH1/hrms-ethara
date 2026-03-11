from django.urls import path
from .views import AttendanceListCreateViewAPI

urlpatterns = [
    path('',AttendanceListCreateViewAPI.as_view(), name = 'attendance_list')

]
