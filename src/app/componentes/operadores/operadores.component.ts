import { Usuario } from '../../models/operadores';
import { OperadoresService } from '../../services/operadores.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent implements OnInit {
  constructor(public operadoresService:OperadoresService) { }

  disabledInput: boolean = false;
  ngOnInit(): void {
    //console.log(this.empleadoService.getEmpleados());
    this.getUsuarios();
  }

  getUsuarios(){
    this.operadoresService.getUsuarios().subscribe(
      res => {
        this.operadoresService.operadores= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  getUsuario(_id:any){
    this.operadoresService.getUsuario(_id).subscribe(
      res => {
        this.operadoresService.operadores= res;
        this.operadoresService.operador=this.operadoresService.operadores[0];
        console.log(res);
        this.getUsuarios();
        
      },
      err => console.log(err)
    )
  }

  createUsuario(form:NgForm){
    if(form.value.id_usuario!==0){                       //form.value.id
       alert('actualizando'); 
       this.operadoresService.editOperador(form.value).subscribe(
        res=> {
          form.reset();
         this.getUsuarios();
        },
        err=> console.log(err)
       );
     }else{//Creando
      alert('Usuario Creado'); 
      this.operadoresService.createOperador(form.value).subscribe(
      res=> {
        this.getUsuarios();
        form.reset();
      },
      err=> console.log(err)
    )}
  }     

  deleteOperador(_id:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+_id);
     if(resp){
       this.operadoresService.deleteOperador(_id).subscribe(
        (res)=>{
          this.getUsuarios();
        },
        (err)=> console.log(err)
       );
     }
  }
  editUsuario(usuario:Usuario){
    this.operadoresService.operador= usuario;
  }

  formReset(form:NgForm){
    this.operadoresService.operador=form.value;
    form.reset();
  }
}