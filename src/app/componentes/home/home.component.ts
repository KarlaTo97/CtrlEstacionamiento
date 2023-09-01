import { UsuariosService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: string = '';
  password: string = '';
  
  constructor( public userService: UsuariosService,
    private router:Router) {}

  ngOnInit(): void {
  }

  loginUsuario(){
    this.userService.loginUsuario(this.usuario).subscribe(
      res => {
      this.userService.usuarios=res;
      console.log(res);
      this.router.navigate(['entrada-vehiculos']);
    },
      err => console.log(err)
    );
  }

  formReset(form:NgForm){
    this.userService.usuarios=form.value;
    form.reset();
  }
 
}
