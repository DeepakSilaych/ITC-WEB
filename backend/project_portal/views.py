from rest_framework import generics
from .models import Project, Person
from .serializers import ProjectSerializer,PersonSerializer
from django.shortcuts import get_object_or_404

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PersonList(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonProjects(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        pk = self.kwargs['pk']
        person = get_object_or_404(Person, id=pk)
        queryset1 = Project.objects.filter(people_involved__in=[person])
        queryset2 = Project.objects.filter(proposer__in=[person])
        queryset = queryset1.union(queryset2)

        return queryset 