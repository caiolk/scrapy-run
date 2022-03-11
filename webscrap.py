from urllib import request
import requests
import time
from bs4 import BeautifulSoup
apiUrl = "https://www.ticketagora.com.br//Calendario";


i = 1
for i in range(3,4):  
    payload = { "organizador" : "Todos-os-organizadores",
           "termo" : "",
           "uf" : "PR",
           "cidade" : "Todas-as-cidades",
           "periodo" : 0,
           "mes": i,
           "inicio" : "",
           "fim": "",
           "filtroRapido" : "Corrida-de-rua,Trail-run,Night-run,Grupos-e-assessorias,4K,5K-a-10K,11k-a-20K,21K,42K",
           "apenasInscricoesAbertas" : "true",
           "precoDe" : "0,00",
           "precoAte" : "0,00",
           "freteGratis" : "false",
           "ordenacao" : "1"
           } 
    response = requests.post(apiUrl, payload);
    content = response.json()
    
    for dadosEventos in content:
        print('\n\n')
        print(dadosEventos)
        print('\n\n')
        print('Url -> https://www.ticketagora.com.br/e/'+dadosEventos['TituloUrl']+'-'+str(dadosEventos['IdEvento']))
        print('\n\n')
    print('\n\n\n')
    time.sleep(3);
    


