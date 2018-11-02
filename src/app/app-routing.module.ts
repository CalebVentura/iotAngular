import { NgModule } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./paginas/home/home.component";
import { AboutComponent} from "./paginas/about/about.component";
import { MedicionesComponent } from "./paginas/mediciones/mediciones.component";
import { ItemComponent } from './paginas/item/item.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'mediciones', component: MedicionesComponent},
  { path: 'item/:id', component: ItemComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes, {useHash: true})//hash para que todas las páginas sea procesadas por el index, mas no por defecto
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{ }
