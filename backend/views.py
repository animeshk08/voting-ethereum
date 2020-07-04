import json
from .models import Election, Constituency, AadharDetail, ElectionConstituency, Party, PartyCandidate
from .serializers import ElectionSerializer, ConstituencySerializer, AadharDetailSerializer, ElectionConstituencySerializer, PartySerializer, PartyCandidateSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt 
def index(request):
    print("manan")
    return render(request, 'codefundo/index.html')

# Create your views here.
# @csrf_exempt 
class AuthAPI(APIView):

	def get_object(self, mobile_num):
		try:
			return AadharDetail.objects.get(mobile_num=mobile_num)
		except AadharDetail.DoesNotExist:
			return None

	def post(self, request):
		user = self.get_object(request.data['mobile_num'])
		if user is None:
			return Response(status=status.HTTP_404_NOT_FOUND)

		serialized_user = json.dumps({'id': user.id})
		return Response(serialized_user, status=status.HTTP_200_OK)

# @csrf_exempt 
class GetAadharAPI(APIView):

    def get_object(self, pk):
        try:
            return AadharDetail.objects.get(pk=pk)
        except AadharDetail.DoesNotExist:
            return None

    def get(self, request):
        print("madsf")
        user = self.get_object(request.query_params['id'])
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serialized_user = AadharDetailSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = self.get_object(request.data['id'])
        if user is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serialized_user = AadharDetailSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

# @csrf_exempt 
class GetAllUpcomingElectionAPI(APIView):

    def get(self, request):
        all_upcoming_elections = Election.objects.filter(start_date__gte=date.today())

        serialized_all_upcoming_elections = ElectionSerializer(all_upcoming_elections, many=True)
        return Response(serialized_all_upcoming_elections.data, status=status.HTTP_200_OK)

    def post(self, request):
        user = AadharDetail.objects.get(pk=request.data['id'])
        election_constituency = ElectionConstituency.objects.filter(constituency_id=user.constituency_id)
        elections = []
        for e_c in election_constituency:
            election = Election.objects.get(pk=e_c.election_id.id)
            elections.append(election)

        new_elections = []
        for e in elections:
            if e.start_date > date.today():
                new_elections.append(e)

        serialized_elections = ElectionSerializer(new_elections, many=True)
        return Response(serialized_elections.data, status=status.HTTP_200_OK)

# @csrf_exempt 
class GetAllPastElectionAPI(APIView):

    def get(self, request):
        all_past_elections = Election.objects.filter(end_date__lte=date.today())

        serialized_all_past_elections = ElectionSerializer(all_past_elections, many=True)
        return Response(serialized_all_past_elections.data, status=status.HTTP_200_OK)

    def post(self, request):
            user = AadharDetail.objects.get(pk=request.data['id'])
            election_constituency = ElectionConstituency.objects.filter(constituency_id=user.constituency_id)
            elections = []
            for e_c in election_constituency:
                election = Election.objects.get(pk=e_c.election_id.id)
                elections.append(election)

            new_elections = []
            for e in elections:
                if e.end_date < date.today():
                    new_elections.append(e)

            serialized_elections = ElectionSerializer(new_elections, many=True)
            return Response(serialized_elections.data, status=status.HTTP_200_OK)

# @csrf_exempt 
class GetAllCandidateByElectionAPI(APIView):

    def get(self, request):
        all_candidates = PartyCandidate.objects.filter(election_id = request.query_params['election_id'])
        aadhar_candidate = []
        for candidate in all_candidates:
            people = AadharDetail.objects.get(pk=candidate.aadhar_detail_id.id)
            aadhar_candidate.append(people)

        serialized_aadhar_candidate = AadharDetailSerializer(aadhar_candidate, many=True)
        return Response(serialized_aadhar_candidate.data, status=status.HTTP_200_OK)

    #def post(self, request):
    #    all_candidates = PartyCandidate.objects.filter(election_id=request.data['election_id'])
    #    aadhar_candidate = []
    #    for candidate in all_candidates:
    #        people = AadharDetail.objects.get(pk=candidate.aadhar_detail_id.id)
    #        aadhar_candidate.append(people)
    #    serialized_aadhar_candidate = AadharDetailSerializer(aadhar_candidate, many=True)
    #    return Response(serialized_aadhar_candidate.data, status=status.HTTP_200_OK)

    def post(self, request):
        election_dict = []
        election_id = request.data['election_id']
        election_constituency = ElectionConstituency.objects.filter(election_id=election_id)

        for i,ec in enumerate(election_constituency):
            election_dict.append(dict())
            election_dict[i]['name'] = ec.constituency_id.name
            election_dict[i]['candidates'] = []

            party_candidate = PartyCandidate.objects.filter(constituency_id=ec.constituency_id.id).filter(election_id=ec.election_id.id)

            for j,pc in enumerate(party_candidate):
                election_dict[i]['candidates'].append(AadharDetailSerializer(AadharDetail.objects.get(id=pc.aadhar_detail_id.id)).data)
                election_dict[i]['candidates'][j]['party'] = pc.party_id.name

        return Response(election_dict, status=status.HTTP_200_OK)

# @csrf_exempt 
class GetAllContestingCandidatesOfUserConstituency(APIView):

    def post(self, request):
        user = AadharDetail.objects.get(pk=request.data['user_id'])
        party_candidate = PartyCandidate.objects.filter(constituency_id=user.constituency_id.id).filter(election_id=request.data['election_id'])

        candidates = []
        for i,pc in enumerate(party_candidate):
            candidates.append(AadharDetailSerializer(AadharDetail.objects.get(id=pc.aadhar_detail_id.id)).data)
            candidates[i]['party'] = pc.party_id.name
            candidates[i]['party_symbol'] = pc.party_id.image_symbol.url

        return Response(candidates, status=status.HTTP_200_OK)
