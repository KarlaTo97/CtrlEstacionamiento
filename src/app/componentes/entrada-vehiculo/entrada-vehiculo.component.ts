import { Auto, Accesos } from 'src/app/models/accesos';
import { AccesosService } from 'src/app/services/accesos.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-entrada-vehiculo',
  templateUrl: './entrada-vehiculo.component.html',
  styleUrls: ['./entrada-vehiculo.component.css']
})
export class EntradaVehiculoComponent implements OnInit {
  constructor(public accesosService: AccesosService){}
  ngOnInit(): void {
    this.getAutos();
  }
  getAutos(){
    this.accesosService.getAutos().subscribe(
      res => {
        this.accesosService.autos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getAuto(_id: any){
    this.accesosService.getAuto(_id).subscribe(
      res =>{
        this.accesosService.autos = res;
        this.accesosService.auto=this.accesosService.autos[0];
        console.log(res)
        this.getAutos();
      }
    )
  }
  createAuto(form:NgForm){
    alert('Vehiculo Registrado');
    this.accesosService.createAuto(form.value).subscribe(
      res => {
        this.getAutos();
      },
      err=> console.log(err)
    )
    
  }

  createAcceso(form:NgForm){
    alert('Acceso Registrado');
    this.accesosService.createAcceso(form.value).subscribe(
      res => {
        this.getAutos();
      },
      err=> console.log(err)
    )
    
  }
  formReset(form:NgForm){
    this.accesosService.auto=form.value;
    form.reset();
  }

  printTicket() {
    const printWindow = window.open('', '', 'height=600,width=800');
    document.write('<div class="ticket">')
    document.write('<h5>Estacionamiento Peña</h5>')
    document.write('<p>Zacatecas #7, Centro Dolores Hidalgo</p>')
    document.write('  <p>HOR: 9AM-6PM LUN-DOM</p>')
    document.write('  <p>=================</p>')
    document.write('<p>Placa:</p>')
    document.write('<p>Modelo:*</p>')
    document.write('<p>Observaciones:*</p>')
    document.write('<br/><br/><br/><br/>')
    document.write('<p>Hora de Entrada:</p>')
    document.write('<p></p>')
    document.write('<p>=================</p>')
    document.write('<p>COSTO HORA/FRACC. $20.00</p>')
    document.write('<p>BOLETO PERDIDO 100 PESOS</p>')
    document.write(' </div>')
    document.close();
  }
}
