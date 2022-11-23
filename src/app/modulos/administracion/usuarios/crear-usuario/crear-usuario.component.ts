import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  fgValidador : FormGroup = this.fb.group({
    'cedula' : ['', [Validators.required]],
    'nombre' : ['', [Validators.required]],
    'apellido' : ['', [Validators.required]],
    'telefono' : ['', [Validators.required]],
    'correo' : ['', [Validators.required]],
    'rol' : ['', [Validators.required]]
  })

  constructor(private usuarioService: UsuarioService,
    private fb : FormBuilder,
    private router : Router) { }

  ngOnInit(): void {
  }
  GuardarUsuario(){
    //sacar info formulario
    let cedula = this.fgValidador.controls['cedula'].value;
    let nombre = this.fgValidador.controls['nombre'].value;
    let apellido = this.fgValidador.controls['apellido'].value;
    let telefono = this.fgValidador.controls['telefono'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let rol = this.fgValidador.controls['rol'].value;

    //crear instancia modelo de usuario
    let modelo = new ModeloUsuario();
    modelo.cedula = cedula;
    modelo.nombre = nombre;
    modelo.apellido = apellido;
    modelo.telefono = telefono;
    modelo.correo = correo;
    modelo.rol = rol;

    //llamar servicio de creacion
    this.usuarioService.CrearUsuario(modelo).subscribe(
      (datos) => {
        alert ("registro almacenado");
        this.router.navigate(["/administracion/buscar-usuario"]);
      },
      (error) => {
        alert("Error al almacenar");
      }
    )

  }

}
