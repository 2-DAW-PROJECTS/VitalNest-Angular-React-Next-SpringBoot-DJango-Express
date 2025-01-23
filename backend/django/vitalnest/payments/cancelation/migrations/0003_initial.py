# Generated by Django 4.2.18 on 2025-01-23 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('cancelation', '0002_initial'),
        ('user', '0001_initial'),
        ('payment', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cancelation',
            name='id_payment',
            field=models.ForeignKey(blank=True, db_column='id_payment', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cancelations', to='payment.payment'),
        ),
        migrations.AddField(
            model_name='cancelation',
            name='id_user',
            field=models.ForeignKey(blank=True, db_column='id_user', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cancelations', to='user.user'),
        ),
    ]
