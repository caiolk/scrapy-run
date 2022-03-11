import scrapy

class RunSpider(scrapy.Spider):
    name = 'RunSpider';
    start_urls = ['https://www.ticketagora.com.br/Calendario/Todos-os-organizadores/Corridas-virtuais,Corrida-de-rua,Trail-run,Night-run,Grupos-e-assessorias,5K-a-10K,11k-a-20K,21K/Todo-o-Brasil/Todas-as-cidades/0,00/0,00/false/?termo=&periodo=0&mes=&inicio=&fim=&ordenacao=1']
    
    def parse(self, response):
        print('Inicio >>>>>>\n\n')
        div_events = response.xpath('*//div[@class="row line-events"]')
        i = 0
        corridas = []
        for div_ev in div_events:
            
            # events_info = div_ev.xpath('*//div')
            # for ev in events_info:
                
                
            #     corridas.append = ev.xpath('*//figure/img/@src')
            #     #corridas[i]['Imagem'] = "adaf"
                
                
            #     #i += 1;
            # print(corridas)
            # break;
            events_info_add= div_ev.xpath('*//footer')
            for add_info in events_info_add:
                
                yield{
                    'Organizador': add_info.xpath('*//a/text()').get(),
                    'Data': add_info.xpath('*//time/text()').get(),
                    'Local': add_info.xpath('*//address/text()').get()
                }
               
                
           
                
            
            
        print('fim >>>>>>\n\n\n')
        