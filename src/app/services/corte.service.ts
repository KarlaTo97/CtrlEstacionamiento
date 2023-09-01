import { Corte } from "../models/corte";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CorteCajaService {
    URL_API = 'http://localhost:3000/accesos/';
    cortes: Corte[]=[];
    constructor(private http: HttpClient){}

    getCorte(fecha: any){
        return this.http.get<any[]>(this.URL_API + fecha );
    }
}