# Generated by Django 4.1.7 on 2023-05-14 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project_portal', '0002_person_alter_project_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='id',
        ),
        migrations.AlterField(
            model_name='person',
            name='roll_no',
            field=models.CharField(max_length=20, primary_key=True, serialize=False),
        ),
    ]
