import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils.service';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

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

  eliminar(){

   this.utils.mostrarError('Likes')
  }

  
  salir(){
    this.router.navigate[('/administracion')];
    
  }



}
