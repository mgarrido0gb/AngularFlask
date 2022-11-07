import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  model: IUsuarios = {correo:'' , nombre: '' , telefono:''}
  constructor(private api:UsuariosServices,private router:Router) { }

  ngOnInit(){
    this.actualizarTabla();
  } 

  guardarUsuario(){
    this.api.createUser(this.model).subscribe((response: IUsuarios )=>{
    this.actualizarTabla();
    this.limpiarCampos();
    alert("Usuario Agregado Exitosamente");
    
   
    
    
    },
    err =>{
      console.log(err)
    })
  }
    
  actualizarTabla(){
    this.api.getUsuarios().subscribe(data =>{
      this.usuarios = data
      console.log(data)
     
   })
   }

   limpiarCampos(){
      this.model.correo = '',
      this.model.nombre = '',
      this.model.telefono = ''
   }



  
   
   
   
}



  


