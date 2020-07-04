from django.contrib import admin
from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import url

app_name = "backend"


urlpatterns = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)+[
    
    path('admin/', admin.site.urls),
    path('auth/', AuthAPI.as_view()),
    path('getAadharDetails/', GetAadharAPI.as_view()),
    path('getAllUpcomingElections/', GetAllUpcomingElectionAPI.as_view()),
    path('getAllPastElections/', GetAllPastElectionAPI.as_view()),
    path('getAllCandidateByElection/', GetAllCandidateByElectionAPI.as_view()),
    path('getAllContestingCandidatesOfUserConstituency/', GetAllContestingCandidatesOfUserConstituency.as_view()),
    url(r'',index, name='home'),
]