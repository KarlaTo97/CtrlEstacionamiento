import { Usuario } from "../models/usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class UsuariosService {
    URL_API= 'http://localhost:3000/usuarios/';
    public user:Usuario=
    {id_usuario:0, id_tipo: '2', nombre:'',usuario:'', contrasena:'',email:'',direccion:'',telefono :''};
    
    usuarios: Usuario[]=[];
    constructor(private http: HttpClient){} 

    loginUsuario(usuario: string){
        return this.http.get<Usuario[]>(this.URL_API +usuario);
    }
}