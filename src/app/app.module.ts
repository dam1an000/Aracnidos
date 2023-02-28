import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { PracticasComponent } from './practicas/practicas.component';

import { CargarscriptsService } from './cargarscripts.service';

import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path: '', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    PracticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],


  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
