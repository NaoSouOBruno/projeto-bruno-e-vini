from django.contrib import admin
from django.urls import path, include
from escola.views import AlunoViewSet
from rest_framework import routers

router = routers.DefaultRouter() # gerenciar rotas padroes
router.register(r'alunos', AlunoViewSet) # registrar rota de alunos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
