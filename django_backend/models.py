from django.db import models
from django.utils import timezone

class Event(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=50)
    date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.name)
    

    



