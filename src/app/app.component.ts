import { Component,OnInit } from '@angular/core';
import { UsuariosServices } from './components/procesos/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarios:any;

  constructor(public usuario:UsuariosServices){}

  ngOnInit(){
    this.usuario.getUsuarios().subscribe(
      (r) => {this.usuarios = r; console.log(r)},
      (e) => {console.log(e)}
    )
  }
}
