import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modelomascota } from 'src/app/modelos/mascota.modelo';
import { mascotaService } from 'src/app/servicios/mascota.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'usuarioId': ['', [Validators.required]],
    'planId': ['', [Validators.required]],
    'estadoAfiliacion': ['pendiente']

  });
  constructor(private fb: FormBuilder,
    private serviciomascota: mascotaService,
    private router: Router){}

  ngOnInit(): void {
  }

  Guardarmascota(){
    
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
    
  this.serviciomascota.crearmascota(p).subscribe((datos: Modelomascota) => {
    alert("mascota almacenada correctamente, su solicitud será revisara por uno de nuestros asesores");  
  this.router.navigate(["/administracion/inicio"])
  }, (error:any) => {
    alert("Error almacenando la mascota");
  })
  
}
}