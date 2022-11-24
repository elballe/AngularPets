import { Component, OnInit } from '@angular/core';
import { Modelomascota } from 'src/app/modelos/mascota.modelo';
import { mascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {


  listadoRegistros: Modelomascota[] = [];
  constructor(private mascotaservicio: mascotaService) { }

  ngOnInit(): void {
   this.ObtenerListadomascota();
  }

  ObtenerListadomascota(){

    this.mascotaservicio.ObtenerRegistros().subscribe((datos: Modelomascota[]) => {
      this.listadoRegistros = datos;
    })

  }

}
