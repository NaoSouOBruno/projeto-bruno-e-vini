from rest_framework import viewsets
from escola.models import Aluno
from escola.serealizer import AlunoSerializer

class AlunoViewSet(viewsets.ModelViewSet):
    queryset =  Aluno.objects.all()
    serializer_class = AlunoSerializer