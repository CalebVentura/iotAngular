import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Modulos
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { AboutComponent } from './paginas/about/about.component';
import { MedicionesComponent } from './paginas/mediciones/mediciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MedicionesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule /*Realizar peticiones PUT GET DELETE a servidores REST*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
