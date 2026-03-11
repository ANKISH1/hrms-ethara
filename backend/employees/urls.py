from django.urls import path
from .views import EmployeeListCreateViewAPI, EmployeeDeleteViewAPI

urlpatterns = [
    path('',EmployeeListCreateViewAPI.as_view(), name = 'employees_list_create' ),
    path('<int:pk>/',EmployeeDeleteViewAPI.as_view(), name = 'employees_delete' ),

]
