import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListausuariosI } from 'src/app/modelos/listausuarios.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
   this.router.navigate(['administracion']);
 }


}
