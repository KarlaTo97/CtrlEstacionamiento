import { Auto, Accesos } from "../models/accesos";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccesosService{
    URL_API= 'http://localhost:3000/autos/';
    URL_ACC= 'http://localhost:3000/accesos/';
    public auto: Auto=
    {id_auto: 0, id_categoria: 0 , placa: '', modelo: '', marca: '',color: ''}
    public acceso: Accesos=
    {id_acceso: 0, id_auto: 0, id_usuario: 2,codigo: '',monto: 0,estado: ''}


    constructor(private http: HttpClient){}
    
    autos: Auto[]=[];
    accesos : Accesos[]=[];

    getAutos(){
        return this.http.get<Auto[]>(this.URL_API);
    }
    getAuto(id:number){
        return this.http.get<Auto[]>(this.URL_API + id);
    }
    createAuto(auto:Auto){
        return this.http.post(this.URL_API, auto)
    }

    createAcceso(acceso: Accesos){
        return this.http.post(this.URL_ACC, acceso)
    }
    getAutocompleteSuggestions(term: string): Observable<string[]> {
        return this.http.get<string[]>(this.URL_API+ term);
    }
}