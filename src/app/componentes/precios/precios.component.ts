import { Categorias } from '../../models/precios';
import { PreciosService } from 'src/app/services/precios.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  constructor(public preciosService:PreciosService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.preciosService.getCategorias().subscribe(
      res =>{
        this.preciosService.precios = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createPrecios(form:NgForm){
    if(form.value.id_usuario!==0){      
      alert('actualizado');
      this.preciosService.editCategoria(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      );
    }else{
      alert('Usuario Creado'); 
      this.preciosService.createCategoria(form.value).subscribe(
        res=> {
          this.getCategorias();
          form.reset();
        },
        err=> console.log(err)
    )}
  }

  editPrecios(precio: Categorias){
    this.preciosService.precio= precio;
  }
}
