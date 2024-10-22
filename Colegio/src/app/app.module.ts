import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasComponent } from './components/materias/materias.component';
import { pantallProfesorComponent } from './components/pantalla-profesor/pantalla-profesor.component';
import { PantallaEstudianteComponent } from './components/pantalla-estudiante/pantalla-estudiante.component';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    pantallProfesorComponent,
   PantallaEstudianteComponent,
    PantallaInicioComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
