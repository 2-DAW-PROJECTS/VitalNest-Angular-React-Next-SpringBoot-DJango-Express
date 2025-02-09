# Generated by Django 4.2.18 on 2025-01-23 09:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('userpatient', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BedRoom',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_room', models.CharField(max_length=50)),
                ('num_room', models.IntegerField()),
                ('description', models.CharField(max_length=255)),
                ('availability', models.CharField(max_length=255)),
                ('special_features', models.JSONField()),
                ('isactive', models.IntegerField()),
                ('createdat', models.DateTimeField(auto_now_add=True)),
                ('updatedat', models.DateTimeField(auto_now=True)),
                ('id_patient', models.ForeignKey(blank=True, db_column='id_patient', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bedrooms', to='userpatient.userpatient')),
            ],
            options={
                'db_table': 'bedroom',
            },
        ),
    ]
