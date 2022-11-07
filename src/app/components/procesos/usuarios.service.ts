import { Injectable } from "@angular/core";
import { Observable } from 'rxjs'

import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { IUsuarios } from "./usuarios";

@Injectable({
    providedIn: 'root'
})


export class UsuariosServices
{
    API_SERVER = '/rutas/usuarios'
    

    constructor(public http:HttpClient){}

    //metodo que lista endpoint
    public getUsuarios():Observable<any>{
        return this.http.get<any>(this.API_SERVER);
    }
    //metodo insertar usuario mediante post
    public createUser(user:IUsuarios):Observable<IUsuarios>{
        return this.http.post<IUsuarios>(this.API_SERVER+"post",user);
        
        
    }
}