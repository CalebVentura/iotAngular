import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ModulosService } from 'src/app/services/modulos.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.css']
})
export class MedicionesComponent implements OnInit {

  constructor(public infomedicion:InfoPaginaService, public modulosService: ModulosService) { }

  ngOnInit() {
  }

}
