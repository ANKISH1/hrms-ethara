from rest_framework import serializers
from .models import Attendance
from employees.serializers import EmployeeSerializer

class AttendanceSerializer(serializers.ModelSerializer):
    emp_detail = EmployeeSerializer(source = 'emp', read_only = True)
    class Meta:
        model = Attendance
        fields = ['emp','emp_detail', 'date', 'status']