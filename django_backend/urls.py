from django.urls import path
from .views import ReactListCreateView, ReactRetrieveUpdateDestroyView

urlpatterns = [
    path('api/react/', ReactListCreateView.as_view(), name='react-list-create'),
    path('api/react/<int:pk>/', ReactRetrieveUpdateDestroyView.as_view(), name='react-detail'),
]