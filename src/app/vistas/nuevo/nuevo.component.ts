import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ListausuariosI } from 'src/app/modelos/listausuarios.interface';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    usarname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')  
 });

  constructor(private utils:UtilsService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form:ListausuariosI){
    this.utils.postCliente(form).subscribe(data=>{
      console.log(data);
    })

  }

  salir(){
    this.router.navigate(['administracion']);
  }

}
