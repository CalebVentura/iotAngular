import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modulo } from '../interfaces/modulos.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  cargando = true;

//si voy a hacer uso de http escribo lo siguiente
  constructor(private http: HttpClient) { 
    this.cargarModulos();
  }

  private cargarModulos(){
    this.http.get('https://iot-angular.firebaseio.com/productos_idx.json')
        .subscribe( (resp : Modulo[])=>{
          // : para signar el tipo de variable que es
          // = para asignar un valor a la variable
          console.log(resp);
          this.cargando = false;
        });
  }
}
