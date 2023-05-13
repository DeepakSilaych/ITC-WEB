from django.urls import path
from .views import ProjectList, ProjectDetail, PersonProjects
from .serializers import PersonSerializer
from .models import Person
from rest_framework import generics

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
    path('projects/person/<int:roll_no>/', PersonProjects.as_view(), name='person-projects'),
    path('people/', generics.ListCreateAPIView.as_view(queryset=Person.objects.all(), serializer_class=PersonSerializer), name='person-list'),
]