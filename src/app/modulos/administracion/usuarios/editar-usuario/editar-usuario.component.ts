import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id: string ='';

  fgValidador : FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'cedula' : ['', [Validators.required]],
    'nombre' : ['', [Validators.required]],
    'apellido' : ['', [Validators.required]],
    'telefono' : ['', [Validators.required]],
    'correo' : ['', [Validators.required]],
    'rol' : ['', [Validators.required]]
  })

  constructor(private usuarioService: UsuarioService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.usuarioService.ObtenerRegistroPorId(this.id).subscribe(
      (datos:ModeloUsuario) => {
        this.fgValidador.controls['id'].setValue(datos.id);
        this.fgValidador.controls['cedula'].setValue(datos.cedula);
        this.fgValidador.controls['nombre'].setValue(datos.nombre);
        this.fgValidador.controls['apellido'].setValue(datos.apellido);
        this.fgValidador.controls['telefono'].setValue(datos.telefono);
        this.fgValidador.controls['correo'].setValue(datos.correo);
        this.fgValidador.controls['rol'].setValue(datos.rol);
      },
      (error) => {
        console.log("Error buscando usuario");

      }
    )
  }

  ActualizarUsuario(){
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

    //llamar servicio de actualización
    this.usuarioService.ActualizarUsuarioPorId(this.id,modelo).subscribe(
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
