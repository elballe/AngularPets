import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  id: string = "";

  constructor(private mascotaService : mascotaService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  EliminarMascota(){
    this.mascotaService.Eliminarmascota(this.id).subscribe(
      (datos)=>{
        alert("Registro eliminado correctamente");
        this.router.navigate(["/administracion/buscar-mascota"]);
      },
      (error) =>{
        alert("Error elmininando el registro");
      }
    )
  }

}
