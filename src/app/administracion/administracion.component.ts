import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListausuariosI } from '../modelos/listausuarios.interface';
import { UtilsService } from '../utils.service';
import { WebService } from '../web.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  clientes!: ListausuariosI[];

  constructor(private utils: UtilsService, private router:Router) { }

  ngOnInit(): void {
    this.utils.getClientes().subscribe(data =>{
      this.clientes = data;
      console.log(data)
   })
  }

  editarCliente(name: any){
    this.router.navigate(['/editar', name])
    console.log(name)
    }
  
    nuevoCliente(){
      this.router.navigate(['/nuevo']);
    }

    modificarCliente(){
      this.router.navigate(['/editar']);
    }

    publicarCliente(){
      this.router.navigate(['/publicaciones']);
    }
 
}
