import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  id: string = "";

  constructor(private productoService : productoService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  Eliminarproducto(){
    this.productoService.Eliminarproducto(this.id).subscribe(
      (datos)=>{
        alert("Registro eliminado correctamente");
        this.router.navigate(["/administracion/buscar-producto"]);
      },
      (error) =>{
        alert("Error elmininando el registro");
      }
    )
  }

}

