import { Historial } from "../models/historial";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HistorialService {
    URL_API = 'http://localhost:3000/accesos/';

    historiales: Historial[]=[];

    constructor(private http: HttpClient){}

    getHistorial(fechaInicio: any, fechaFin: any): Observable<any>{
        const url = `${this.URL_API}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
        return this.http.get<Historial[]>(url);
    }

}