import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosServices } from '../procesos/usuarios.service';
import { IUsuarios } from './usuarios';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {
  public usuarios:Array<any>=[]
  constructor(private api:UsuariosServices,private router:Router) { }

  ngOnInit(){
    this.api.getUsuarios().subscribe(data =>{
       this.usuarios = data
       console.log(data)
      
    })
    
  } 

}
