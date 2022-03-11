from urllib import request
from attr import attr
import requests
import time
from bs4 import BeautifulSoup
import time

idEvento = "33179"
urlApiController = "https://site.ticketagora.com.br/Inscricao/Controller/CategoriaController.ashx"
urlEvento = urlApiController+"?eventoId="+idEvento+"&tagO=&action=categoria&lang=ptbr";

response = requests.get(urlEvento).json()

site = BeautifulSoup(response['body'],'html.parser')

idModals = site.findAll('div',attrs={'class' : 'bloco-menor row'})

for id in idModals:
    idMod = id.get('data-id')
    responseInscricao = requests.post(urlApiController, { "__idMOD": idMod, "__idEV" : idEvento});
    contentInscricao = responseInscricao.json()
    
    contentTaxa = BeautifulSoup(contentInscricao['body'],'html.parser')
    dadosTaxas = contentTaxa.findAll('div',attrs={'class' : 't-categoria'})
    for taxas in dadosTaxas:
        print(taxas.text)    
    
    print('\n\n')
    time.sleep(5);
   


