import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListausuariosI } from '../modelos/listausuarios.interface';
import { UtilsService } from '../utils.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  
  constructor(private activatedrouter: ActivatedRoute , private router: Router, private utils: UtilsService) { }

  datosCliente!: ListausuariosI;
    editarForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      usarname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')  
    });

  ngOnInit(): void {
    let name = this.activatedrouter.snapshot.queryParamMap.get('name');
    this.utils.getSingleClientes().subscribe(data =>{
         this.datosCliente = data[0];
         console.log(this.datosCliente);
         this.editarForm.setValue({
           'name' : this.datosCliente.name,
           'gender' : this.datosCliente.gender,
           'usarname' : this.datosCliente.usarname,
           'email': this.datosCliente.email,
           'password' : this.datosCliente.password

         })
    });

    //console.log(this.editarForm.value);
  }

  postForm(form:ListausuariosI){
    this.utils.putCliente(form).subscribe(data =>{
      console.log(data);
  });
 }

 eliminar(){
  let datos : ListausuariosI = this.editarForm.value;
  this.utils.deleteCliente(datos).subscribe( data =>{
       console.log(data);
  });

 }

 salir(){
   this.router.navigate(['cliente']);
 }

 
}
