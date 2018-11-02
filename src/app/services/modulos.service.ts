import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modulo } from '../interfaces/modulos.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {

  cargando = true; // para el loaging
  modulos : Modulo[]=[];

//si voy a hacer uso de http escribo lo siguiente
  constructor(private http: HttpClient) { 
    this.cargarModulos();
  }

  private cargarModulos(){
    this.http.get('https://iot-angular.firebaseio.com/productos_idx.json')
        .subscribe( (resp : Modulo[])=>{
          // : para asignar el tipo de variable que es
          // = para asignar un valor a la variable
          this.modulos=resp;
          this.cargando = false;
        });
  }

  getModulo(id: string){
    return this.http.get(`https://iot-angular.firebaseio.com/productos/${id}.json`);

  }
}
