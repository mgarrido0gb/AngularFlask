import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosServices } from '../procesos/usuarios.service';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.css']
})
export class ProcesosComponent implements OnInit {

  constructor(private api:UsuariosServices,private router:Router) { }

  ngOnInit(): void {
    this.api.getUsuarios().subscribe(data =>{
      console.log(data)
    })
    
  }

}
