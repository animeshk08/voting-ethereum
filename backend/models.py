from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Election(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, default='Elections are Coming')
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

class Constituency(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class AadharDetail(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    mobile_num = models.CharField(max_length=20)
    aadhar_num = models.CharField(max_length=20)
    finger_print = models.TextField(max_length=255)
    age = models.IntegerField()
    gender = models.CharField(max_length=20)
    address = models.TextField(max_length=255)
    pincode = models.CharField(max_length=20)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.name + " " + self.constituency_id.name

class ElectionConstituency(models.Model):
    id = models.IntegerField(primary_key=True)
    election_id = models.ForeignKey(Election, on_delete=models.CASCADE)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)

    def __str__(self):
        return self.election_id.name + " " + self.constituency_id.name


class Party(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    image_symbol = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.name

class PartyCandidate(models.Model):
    id = models.IntegerField(primary_key=True)
    party_id = models.ForeignKey(Party, on_delete=models.CASCADE)
    aadhar_detail_id = models.ForeignKey(AadharDetail, on_delete=models.CASCADE)
    election_id = models.ForeignKey(Election, on_delete=models.CASCADE)
    constituency_id = models.ForeignKey(Constituency, on_delete=models.CASCADE)

    def __str__(self):
        return self.party_id.name + " " + self.aadhar_detail_id.name + " " + self.election_id.name + " " + self.constituency_id.name