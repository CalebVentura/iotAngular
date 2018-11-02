import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulosService } from 'src/app/services/modulos.service';
import { ModuloExtend } from '../../interfaces/moduloExtend.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  modulo: ModuloExtend;
  id: string;

  constructor(private route:ActivatedRoute,
              public moduloService: ModulosService) { }

  ngOnInit() {

    this.route.params
        .subscribe(parametros => {
          //console.log(parametros['id']);
          this.moduloService.getModulo(parametros['id'])
              .subscribe((modulo: ModuloExtend) =>{
                //TODO LO QUE VOY A UTILIZAR
                this.id=parametros['id'];
                this.modulo=modulo;
                //console.log(modulo);
              });

        });

  }

}
