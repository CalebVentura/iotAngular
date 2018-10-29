import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.component.html',
  styleUrls: ['./mediciones.component.css']
})
export class MedicionesComponent implements OnInit {

  constructor(public infomedicion:InfoPaginaService) { }

  ngOnInit() {
  }

}
