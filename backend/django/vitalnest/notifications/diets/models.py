from django.db import models
from vitalnest.usertype.user.models import User
from vitalnest.usertype.userpatient.models import UserPatient
from vitalnest.food.diets.models import Diets

class NotificationsDiets(models.Model):
    id_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='diet_notifications', db_column='id_user', blank=True, null=True)
    email = models.EmailField(max_length=255)
    id_patient = models.ForeignKey(UserPatient, on_delete=models.CASCADE, related_name='diet_notifications', db_column='id_patient', blank=True, null=True)
    id_diet = models.ForeignKey(Diets, on_delete=models.CASCADE, related_name='notifications', db_column='id_diet', blank=True, null=True)
    urgency = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    isactive = models.IntegerField()
    createdat = models.DateTimeField(auto_now_add=True)
    updatedat = models.DateTimeField(auto_now=True)
    isview = models.IntegerField()

    class Meta:
        db_table = 'notificationsdiets'
