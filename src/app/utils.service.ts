import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ListausuariosI } from './modelos/listausuarios.interface';
import { ResponseI } from './modelos/response.interface';
import {  ReactiveFormsModule} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private SESSION_COOKIE = 'sesion'

  private loading = Swal.mixin({
    allowOutsideClick: false,
    allowEscapeKey: false, 
    allowEnterKey: false,
    onBeforeOpen: () => {
      Swal.showLoading()
    }
  })

  private toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  url:string = "https://ublog-backend-app.herokuapp.com/clientes";
  url2:string = "https://ublog-backend-app.herokuapp.com";



  constructor(private cookieService: CookieService, private http: HttpClient) { }

  getClientes()
  {
    return this.http.get<ListausuariosI[]>(this.url);
  }

  getSingleClientes(){
    return this.http.get<ListausuariosI[]>(this.url);
  }

  putCliente(form:ListausuariosI) : Observable<ResponseI>{
    let direccion = this.url 
    return this.http.put<ResponseI>(direccion, form);
  }

  deleteCliente(from:ListausuariosI) : Observable<ResponseI>{
    let direccion = this.url;
    let Option  = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'

      }),
      body:from
    } 
    return this.http.delete<ResponseI>(direccion, Option);
 }

 postCliente(form:ListausuariosI):Observable<ResponseI>{
  let direccion = this.url;
  return this.http.post<ResponseI>(direccion, form);

}

  guardarSesion(data){
    this.cookieService.set(this.SESSION_COOKIE, data, 1, '/')
  }

  obtenerSesion(){
    if(this.cookieService.check(this.SESSION_COOKIE)){
      return this.cookieService.get(this.SESSION_COOKIE)
    }
    return undefined
  }

  eliminarSesion(){
    this.cookieService.delete(this.SESSION_COOKIE, '/')
  }

  mostrarLoading(){
    this.loading.fire()
  }

  ocultarLoading(){
    this.loading.close()
  }

  mostrarError(mensaje: string){
    this.toast.fire({
      icon: 'error',
      title: mensaje
    })
  }

  mostrarExito(mensaje: any){
    this.toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  newProduct(libro:any){
    return this.http.post(`${this.url}`,libro)
  }

}
