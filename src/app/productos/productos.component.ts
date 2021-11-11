import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';
import { WebService } from '../web.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = []

  constructor(private utils: UtilsService, private web: WebService, private sanitizer: DomSanitizer, private router:Router) { }

  async ngOnInit(): Promise<void> {
    try {
      this.utils.mostrarLoading()
      const response: any = await this.web.getProductos()
      if(response.status != 200){
        this.utils.mostrarError(response.mensaje)
        return
      }
      this.productos = response.productos
      for (let i = 0; i < this.productos.length; i++) {
        this.productos[i].img = this.sanitizer.bypassSecurityTrustResourceUrl(this.productos[i].imagen);  
      }
      this.utils.ocultarLoading()    
    } catch (error) {
    }
  }

  comprar(){

   this.utils.mostrarExito('Likes')
  }

  modificarPerfil(){
    this.router.navigate[('/nuevo-post')];
   
  }

  nuevoPosteo(){
    this.router.navigate[('/login')];
    
  }


}
