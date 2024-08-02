from django.urls import path
from .views import EventListCreateView, EventRetrieveUpdateDestroyView

urlpatterns = [
    path('api/event/', EventListCreateView.as_view(), name='event-create'),
    path('api/event/<int:pk>/', EventRetrieveUpdateDestroyView.as_view(), name='event-detail'),
]