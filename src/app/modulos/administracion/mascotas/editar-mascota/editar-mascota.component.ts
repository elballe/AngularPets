import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelomascota } from 'src/app/modelos/mascota.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { mascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
  id: string = '';

  fgvalidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'estadoAfiliacion': ['']
  })

  constructor(private mascotaService: mascotaService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
  }

  BuscarMascota(){
    this.mascotaService.ObtenerRegistrosPorId(this.id).subscribe(
      (datos:Modelomascota) => {
        this.fgvalidador.controls['nombre'].setValue(datos.nombre);
        this.fgvalidador.controls['foto'].setValue(datos.foto);
        this.fgvalidador.controls['estado'].setValue(datos.estado);
        this.fgvalidador.controls['especie'].setValue(datos.especie);
        this.fgvalidador.controls['comentario'].setValue(datos.comentario);
        this.fgvalidador.controls['usuarioId'].setValue(datos.usuarioId);
        this.fgvalidador.controls['planId'].setValue(datos.planId);
        this.fgvalidador.controls['estadoAfiliacion'].setValue(datos.estadoAfiliacion);
      },
      (error) => {

        console.log("Error buscando usuario");

      }
    )
  }

  Editarmascota() {

    let nombre = this.fgvalidador.controls["nombre"].value;
    let foto = this.fgvalidador.controls["foto"].value;
    let estado = this.fgvalidador.controls["estado"].value;
    let especie = this.fgvalidador.controls["especie"].value;
    let comentario = this.fgvalidador.controls["comentario"].value;
    let usuarioId = this.fgvalidador.controls["usuarioId"].value;
    let planId = this.fgvalidador.controls["planId"].value;
    let estadoAfiliacion = this.fgvalidador.controls["estadoAfiliacion"].value;
    let p = new Modelomascota();

    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
    p.usuarioId = usuarioId;
    p.planId = planId;
    p.estadoAfiliacion = estadoAfiliacion;
    p.id = this.id;

    this.mascotaService.Actualizarmascota(p).subscribe((datos: Modelomascota) => {
      alert("mascota actualizada correctamente");
      this.router.navigate(["/administracion/buscar-mascota"])
    }, (error: any) => {
      alert("Error actualizando la mascota");
    })

  }
}


