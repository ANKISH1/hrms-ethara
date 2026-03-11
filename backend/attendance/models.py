from django.db import models
from employees.models import Employee

# Create your models here.
class Attendance(models.Model):
    STATUS_CHOICES = [('Present', 'Present'), ('Absent', 'Absent')]
    emp = models.ForeignKey(Employee, related_name='attendances', on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    class Meta:
        unique_together = ('emp', 'date')

    def __str__(self):
        return f"{self.emp.full_name} - {self.date} - {self.status}"    