from django.urls import path
from .views import ProjectList, ProjectDetail, PersonProjects, PersonList,PersonDetail
from rest_framework import generics

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
    path('personprojects/<int:pk>/', PersonProjects.as_view(), name='person-projects'),
    path('person/', PersonList.as_view(), name='people-list'),
    path('person/<int:pk>/', PersonDetail.as_view(), name='person-details'),
]