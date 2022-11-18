import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  dataForm:FormGroup = new FormGroup ({});
 

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm= this.fb.group({
      usuario: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      contrasena: ['', [Validators.required]]
    });
  }

  Login(){
    let usuario=this.dataForm.controls["usuario"].value;
    let contrasena=this.dataForm.controls["contrasena"].value;
    let clavecifrada = cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario, clavecifrada).subscribe((datos:any)=> {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"])
    }, (error: any) => {
      //KO
      alert ('Datos invalidos')
    })
    }

  }




