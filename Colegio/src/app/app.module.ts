import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasComponent } from './components/materias/materias.component';
import { PantallaProfesorComponent } from './components/pantalla-profesor/pantalla-profesor.component';
import { PantallaEstudianteComponent } from './components/pantalla-estudiante/pantalla-estudiante.component';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { TablaComponent } from './components/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    PantallaProfesorComponent,
    PantallaEstudianteComponent,
    PantallaInicioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
