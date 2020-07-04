from .models import Election, Constituency, AadharDetail, ElectionConstituency, Party, PartyCandidate
from rest_framework import serializers

class ElectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Election
        fields = '__all__'

class ConstituencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Constituency
        fields = '__all__'

class AadharDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = AadharDetail
        fields = '__all__'

class ElectionConstituencySerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectionConstituency
        fields = '__all__'

class PartySerializer(serializers.ModelSerializer):
    class Meta:
        model = Party
        fields = '__all__'

class PartyCandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartyCandidate
        fields = '__all__'