import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket',
  template: `
    <button class="btn btn-success" (click)="printTicket()" id="printButton">Imprimir Ticket</button>
  `,
})
export class TicketComponent {
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
    window.print();
  }
}
