import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'

import { HttpClient } from "@angular/common/http";

@Injectable()


export class UsuariosServices
{
    private API_SERVER = "http://localhost:4000/rutas/usuarios"

    constructor(public http:HttpClient){}

    //metodo que lista endpoint
    public getUsuarios():Observable<any>{
        return this.http.get(this.API_SERVER)
    }
}