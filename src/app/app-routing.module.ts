import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { SobreApiComponent } from './components/sobre-api/sobre-api.component';

const routes: Routes = [
 {
  path:"inicio",component:InicioComponent
  },
  {
    path:"procesos", component:ProcesosComponent
  },
  {
    path:"sobre", component:SobreApiComponent
  },
  {
    path:"", component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
