import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { EntradaVehiculoComponent } from './componentes/entrada-vehiculo/entrada-vehiculo.component';
import { SalidaVehiculoComponent } from './componentes/salida-vehiculo/salida-vehiculo.component';
import { CorteCajaComponent } from './componentes/corte-caja/corte-caja.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { OperadoresComponent } from './componentes/operadores/operadores.component';
import { EditarOperadorComponent } from './componentes/editar-operador/editar-operador.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'administrador',component:AdministradorComponent},
  {path:'entrada-vehiculos',component:EntradaVehiculoComponent},
  {path:'salida-vehiculos',component:SalidaVehiculoComponent},
  {path:'corte-caja',component:CorteCajaComponent},
  {path:'historial',component:HistorialComponent},
  {path:'precios',component:PreciosComponent},
  {path:'operadores',component:OperadoresComponent},
  {path:'editar-operador',component:EditarOperadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
