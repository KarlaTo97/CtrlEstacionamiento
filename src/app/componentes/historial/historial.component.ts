import { Historial } from '../../models/historial';
import { HistorialService } from "../../services/historial.service";
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit{
  constructor(public historialService: HistorialService) {}
  fechaInicio: string = '';
  fechaFin: string = '';

  ngOnInit(): void {
  }
  getHistorial(){
    this.historialService.getHistorial(this.fechaInicio, this.fechaFin).subscribe(
      res => {
        this.historialService.historiales= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
}
