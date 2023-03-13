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
import { TarantulasComponent } from './content/tarantulas/tarantulas.component';
import { TarcicloComponent } from './content/tarciclo/tarciclo.component';
import { TarconservacionComponent } from './content/tarconservacion/tarconservacion.component';
import { CuidadosComponent } from './content/cuidados/cuidados.component';
import { GaleriaComponent } from './content/galeria/galeria.component';
import { ContactoComponent } from './content/contacto/contacto.component';
import { EscorpionesComponent } from './content/escorpiones/escorpiones.component';
import { TarmudaComponent } from './content/tarmuda/tarmuda.component';
import { TarAnatomiaComponent } from './content/tar-anatomia/tar-anatomia.component';
import { EscanatomiaComponent } from './content/escanatomia/escanatomia.component';
import { EscmudaComponent } from './content/escmuda/escmuda.component';
import { EscconservacionComponent } from './content/escconservacion/escconservacion.component';
import { EsccicloComponent } from './content/escciclo/escciclo.component';
import { MantenimientoComponent } from './content/mantenimiento/mantenimiento.component';
import { EnfermedadesComponent } from './content/enfermedades/enfermedades.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const appRoutes:Routes=[
  {path: '', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'tarantulas', component:TarantulasComponent},
  {path:'Escorpiones', component:EscorpionesComponent},
  {path:'Cuidados', component:CuidadosComponent},
  {path:'Galeria', component:GaleriaComponent},
  {path:'Contacto', component:ContactoComponent},
  {path:'sesion', component:SesionComponent},
  {path:'mantenimiento', component:MantenimientoComponent},
  {path:'enfermedades', component:EnfermedadesComponent},
  {path:'Tarciclo', component:TarcicloComponent},
  {path:'Tarconservacion', component:TarconservacionComponent},
  {path:'Tarmuda', component:TarmudaComponent},
  {path:'Taranatomia', component:TarAnatomiaComponent},
  {path:'Escciclo', component:EsccicloComponent},
  {path:'Escconservacion', component:EscconservacionComponent},
  {path:'Escmuda', component:EscmudaComponent},
  {path:'Escanatomia', component:EscanatomiaComponent},
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
    PracticasComponent,
    TarantulasComponent,
    TarcicloComponent,
    TarconservacionComponent,
    CuidadosComponent,
    GaleriaComponent,
    ContactoComponent,
    EscorpionesComponent,
    TarmudaComponent,
    TarAnatomiaComponent,
    EscanatomiaComponent,
    EscmudaComponent,
    EscconservacionComponent,
    EsccicloComponent,
    MantenimientoComponent,
    EnfermedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSynpmBpvFtw48SF23xOvLXxdYFf4glyDNjFVyo",
      authDomain: "heavyaracnidos.firebaseapp.com",
      projectId: "heavyaracnidos",
      storageBucket: "heavyaracnidos.appspot.com",
      messagingSenderId: "65182180921",
      appId: "1:65182180921:web:77e2546470410856658fe8",
      measurementId: "G-J45C41PG6G"
    })
  ],


  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
