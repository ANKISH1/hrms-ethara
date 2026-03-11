from django.db import models

# Create your models here.
class Employee(models.Model):
    emp_id = models.CharField(max_length=20, unique=True)
    full_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.emp_id}-{self.full_name}"

