from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField()
    proposer = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='proposer_projects')
    people_involved = models.ManyToManyField(Person, related_name='projects_involved_in')

    def __str__(self):
        return self.name