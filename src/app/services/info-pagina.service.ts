import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina ={};
  cargada = false;

  constructor(private http: HttpClient) { 
    //console.log('Servicio de info pagina listo');

    //Crear un archivo que lea el json creado y tomar sus propiedades y usarlo
    //Para eso necesito un modulo que haga peticiones http
    // con HttpClient ya está creado el servicio

    //esta solo es la definicion de dónde está la página, pero no la ejectuta
    this.http.get('assets/data/data-pagina.json')
        .subscribe(
          (resp: infoPagina) => {
            this.cargada = true;
            this.info = resp;
            console.log(resp);
          }
        );
        //el subscribe recibe una respuesta
  }
}
