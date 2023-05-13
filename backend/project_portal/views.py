from rest_framework import generics
from .models import Project, Person
from .serializers import ProjectSerializer
from django.shortcuts import get_object_or_404

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PersonProjects(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        roll_no = self.kwargs['roll_no']
        person = get_object_or_404(Person, roll_no=roll_no)
        queryset1 = Project.objects.filter(people_involved__in=[person])
        queryset2 = Project.objects.filter(proposer__in=[person])
        queryset = queryset1.union(queryset2)

        return queryset 