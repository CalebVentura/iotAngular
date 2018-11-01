import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;

  medidas: any[]=[];

  constructor(private http: HttpClient) { 
    //console.log('Servicio de info pagina listo');

    //Crear un archivo que lea el json creado y tomar sus propiedades y usarlo
    //Para eso necesito un modulo que haga peticiones http
    // con HttpClient ya está creado el servicio
    this.cargarInfo();
    this.cargarMedidas();

        //el subscribe recibe una respuesta
  }
  private cargarInfo(){
    //esta solo es la definicion de dónde está la página, pero no la ejectuta
    this.http.get('assets/data/data-pagina.json')
        .subscribe(
          (resp: infoPagina) => {
            this.cargada = true;
            this.info = resp;
            //console.log(resp);
          }
        );
  }
  private cargarMedidas(){
    this.http.get('https://iot-angular.firebaseio.com/medicion.json')
        .subscribe((resp: any[]) => {
            this.medidas = resp;
            //console.log(resp);
          });
  }
}
