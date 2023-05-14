from rest_framework import serializers, generics
from .models import Project, Person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id','name', 'roll_no']

class ProjectSerializer(serializers.ModelSerializer):
    proposer = PersonSerializer()
    people_involved = PersonSerializer(many=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'details', 'proposer', 'people_involved']

class PersonProjects(generics.ListAPIView):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        name = self.kwargs['name']
        return Project.objects.filter(people_involved__name=name)