import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'

import { HttpClient ,HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})


export class UsuariosServices
{
    private API_SERVER = '/rutas/usuarios'

    constructor(public http:HttpClient){}

    //metodo que lista endpoint
    public getUsuarios():Observable<any>{
        return this.http.get<any>(this.API_SERVER);
    }
}