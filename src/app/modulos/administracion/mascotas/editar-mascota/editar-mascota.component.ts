import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Modelomascota } from 'src/app/modelos/mascota.modelo';
import { mascotaService } from 'src/app/servicios/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
id:string = '';
  fgvalidador: FormGroup = this.fb.group({

    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]],
    'planId': ['', [Validators.required]]

  });
  constructor(private fb: FormBuilder,
    private serviciomascota: mascotaService,
    private router: Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.BuscarMascota();
  }

  BuscarMascota(){
   this.serviciomascota.ObtenerRegistrosPorId(this.id).subscribe((datos:Modelomascota) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["nombre"].setValue(datos.nombre);
      this.fgvalidador.controls["foto"].setValue(datos.foto);
      this.fgvalidador.controls["estado"].setValue(datos.estado);
      this.fgvalidador.controls["especie"].setValue(datos.especie);
      this.fgvalidador.controls["comentario"].setValue(datos.comentario);
      this.fgvalidador.controls["usuarioId"].setValue(datos.usuarioId);
      this.fgvalidador.controls["planId"].setValue(datos.planId);
    });
  }
  
  Editarmascota(){
    
    let nombre = this.fgvalidador.controls["nombre"].value;
    let foto = this.fgvalidador.controls["foto"].value;
    let estado = this.fgvalidador.controls["estado"].value;
    let especie = this.fgvalidador.controls["especie"].value;
    let comentario = this.fgvalidador.controls["comentario"].value;
    let usuarioId = this.fgvalidador.controls["usuarioId"].value;
    let planId = this.fgvalidador.controls["planId"].value;
    let p = new Modelomascota();
    
    p.nombre = nombre;
    p.foto = foto;
    p.estado = estado;
    p.especie = especie;
    p.comentario = comentario;
    p.usuarioId = usuarioId;
    p.planId = planId;
    p.id = this.id;

  this.serviciomascota.Actualizarmascota(p).subscribe((datos: Modelomascota) => {
    alert("mascota actualizada correctamente");  
  this.router.navigate(["/administracion/listar-mascota"])
  }, (error:any) => {
    alert("Error actualizando la mascota");
  })
  
}
}