import { Component, OnInit } from '@angular/core';
import { ListausuariosI } from '../modelos/listausuarios.interface';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  producto: ListausuariosI = {
    name:'',
    gender:'',
    usarname:'',
    email:'',
    password:''
  }; 

  constructor(private utils:UtilsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.producto)
    this.utils.newProduct(this.producto)
    .toPromise()
    .then(() => alert('Usuario Cargado correctamente'))
    .catch(() => alert('hubo un problema'))
  }

}
