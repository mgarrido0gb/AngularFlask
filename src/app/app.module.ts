import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { SobreApiComponent } from './components/sobre-api/sobre-api.component';
import { UsuariosServices } from './components/procesos/usuarios.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ObjectToArrayPipe } from './components/procesos/objectToArray';
import { FormsModule } from '@angular/forms';
//importación de módulos y componentes

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    ProcesosComponent,
    SobreApiComponent,
    ObjectToArrayPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    UsuariosServices
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
