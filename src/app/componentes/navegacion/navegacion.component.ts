import { UsuariosService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  constructor( public userService: UsuariosService) {}
  hora = "";
  today= new Date();
  fecha = this.today.toLocaleDateString("es-MX",{day:'numeric', month:'long', year:'numeric' });

  ngOnInit(): void {
    this.comenzarReloj();
  }
  comenzarReloj() {
    const _this = this;
    setInterval(() => {
      let fecha = new Date();
      let horas = fecha.getHours();
      let minutos = fecha.getMinutes();
      let segundos = fecha.getSeconds();
      let horasArregladas = horas.toString();
      if (horas < 10) {
        horasArregladas = "0" + horasArregladas;
      }
      let minutosArreglados = minutos.toString();
      if (minutos < 10) {
        minutosArreglados = "0" + minutosArreglados;
      }
      let segundosArreglados = segundos.toString();
      if (segundos < 10) {
        segundosArreglados = "0" + segundosArreglados;
      }
      _this.hora = `${horasArregladas}:${minutosArreglados}:${segundosArreglados}`;
    }, 500);
  }
}

