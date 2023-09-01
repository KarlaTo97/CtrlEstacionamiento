import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { EntradaVehiculoComponent } from './componentes/entrada-vehiculo/entrada-vehiculo.component';
import { SalidaVehiculoComponent } from './componentes/salida-vehiculo/salida-vehiculo.component';
import { CorteCajaComponent } from './componentes/corte-caja/corte-caja.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { OperadoresComponent } from './componentes/operadores/operadores.component';
import { EditarOperadorComponent } from './componentes/editar-operador/editar-operador.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InstitucionalComponent,
    HomeComponent,
    AdministradorComponent,
    EntradaVehiculoComponent,
    SalidaVehiculoComponent,
    CorteCajaComponent,
    HistorialComponent,
    PreciosComponent,
    OperadoresComponent,
    EditarOperadorComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
