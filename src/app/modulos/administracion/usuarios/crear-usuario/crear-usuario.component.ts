import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  seInicioSesion: boolean = false;
  rol: string = '';
  subs: Subscription= new Subscription();

  fgValidador: FormGroup = this.fb.group({
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'rol': ['cliente']
  })

  constructor(private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      if (datos.estaIdentificado) {
        this.rol = String(datos.datos?.rol);
        this.seInicioSesion = datos.estaIdentificado;

      } else {
        this.seInicioSesion = false;
      }

    })
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
          alert("registro almacenado");
          this.router.navigate(["/inicio"]);
        },
        (error) => {
          alert("Error al almacenar");
        }
      )

    }

  }
