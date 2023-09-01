import { Usuario } from '../models/operadores';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//<---

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {
  URL_API= 'http://localhost:3000/usuarios/'; //<-----
  public operador:Usuario=
  {id_usuario:0, id_tipo: '2', nombre:'',usuario:'', contrasena:'',email:'',direccion:'',telefono :''};

  //empleados: Empleado[]=[{_id:'1',nombre:'Hugo',puesto:'Programador Jr.',email:'hugo@disney.com',sueldo:100}];
  operadores: Usuario[]=[];

  //constructor() { }
  constructor(private http: HttpClient){}     //<----------
  
  getUsuarios(){
    return this.http.get<Usuario[]>(this.URL_API);   //<------

  }
  getUsuario(id:number){
    return this.http.get<Usuario[]>(this.URL_API +id);
  }

  createOperador(operador:Usuario){
    return this.http.post(this.URL_API,operador);
  }

  deleteOperador(id:number){
     return this.http.delete(this.URL_API+id);
      
    }

  editOperador(operador:Usuario){
    return this.http.put(this.URL_API+operador.id_usuario,operador);
  }
}
