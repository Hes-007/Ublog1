import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministracionComponent } from './administracion/administracion.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderHomeComponent } from './plantillas/header-home/header-home.component';
import { FooterHomeComponent } from './plantillas/footer-home/footer-home.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactosComponent } from './contactos/contactos.component';
import { PublicacionesComponent } from './vistas/publicaciones/publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministracionComponent,
    ClienteComponent,
    NavbarComponent,
    LoginComponent,
    ProductosComponent,
    InicioComponent,
    NuevoPostComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent,
    NuevoComponent,
    EditarComponent,
    ModificarComponent,
    RegistroComponent,
    HeaderHomeComponent,
    FooterHomeComponent,
    AcercaComponent,
    ContactosComponent,
    PublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
