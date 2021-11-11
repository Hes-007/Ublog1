import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
//import { AuthGuard } from './auth.guard';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
//import { NoAuthGuard } from './no-auth.guard';
import { InicioComponent} from './inicio/inicio.component';
import { NuevoPostComponent} from './nuevo-post/nuevo-post.component';
import { EditarComponent} from './vistas/editar/editar.component';
import { NuevoComponent} from './vistas/nuevo/nuevo.component';
import { UsuariosComponent} from './vistas/usuarios/usuarios.component';
import { ModificarComponent} from './modificar/modificar.component';
import { NoAuthGuard } from './no-auth.guard';
import { AuthGuard } from './auth.guard';
import { RegistroComponent} from './registro/registro.component';
import { AcercaComponent} from './acerca/acerca.component';
import { ContactosComponent} from './contactos/contactos.component';
import { PublicacionesComponent} from './vistas/publicaciones/publicaciones.component';

const routes: Routes = [
  { path:'' , redirectTo: 'inicio' , pathMatch: 'full' },
  { path: 'inicio' , component: InicioComponent },
  { path: 'login', component: LoginComponent},
  { path: 'usuarios' , component: UsuariosComponent, canActivate: [AuthGuard], data: {rol_acceso: 1}},
  { path: 'nuevo' , component: NuevoComponent},
  { path: 'editar' , component: EditarComponent },
  { path: 'nuevo-post' , component: NuevoPostComponent},
  { path: 'cliente' , component: ClienteComponent},
  { path: 'administracion' , component: AdministracionComponent},
  { path: 'modificar' , component: ModificarComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'acerca' , component: AcercaComponent},
  { path: 'publicaciones' , component: PublicacionesComponent}


  //{ path: '**', redirectTo: '/login', pathMatch:'full'},
  //{ path: '' , redirectTo: '/login' , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, NuevoComponent, EditarComponent, InicioComponent, AdministracionComponent, ClienteComponent, UsuariosComponent, NuevoPostComponent, ModificarComponent, ContactosComponent, AcercaComponent,  PublicacionesComponent ]
