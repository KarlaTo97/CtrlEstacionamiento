import { Categorias } from "../models/precios";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PreciosService {
    URL_API = 'http://localhost:3000/categorias/';
    public precio: Categorias = 
    { id_categoria:0, descripcion:'', costo: 0};

    precios : Categorias[] = [];

    constructor(private http: HttpClient){}

    getCategorias(){
        return this.http.get<Categorias[]>(this.URL_API);
    }


    createCategoria(precio:Categorias){
        return this.http.post(this.URL_API, precio);
    }
    editCategoria(precio:Categorias){
        return this.http.put(this.URL_API+ precio.id_categoria, precio);
    }

}