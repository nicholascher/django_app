# Generated by Django 4.2.6 on 2024-08-01 14:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_backend', '0002_auto_20240801_1411'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 1, 14, 30, 23, 681643, tzinfo=datetime.timezone.utc)),
        ),
    ]
