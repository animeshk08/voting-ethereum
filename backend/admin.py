from django.contrib import admin
from .models import Election, Constituency, AadharDetail, ElectionConstituency, Party, PartyCandidate

# Register your models here.
admin.site.register(Election)
admin.site.register(Constituency)
admin.site.register(AadharDetail)
admin.site.register(ElectionConstituency)
admin.site.register(Party)
admin.site.register(PartyCandidate)