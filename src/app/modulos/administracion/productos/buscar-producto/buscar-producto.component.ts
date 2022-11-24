import { Component, OnInit } from '@angular/core';
import { Modeloproducto } from 'src/app/modelos/producto.modelo';
import { productoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {


  listadoRegistros: Modeloproducto[] = [];
  constructor(private productoservicio: productoService ) { }

  ngOnInit(): void {
    this.ObtenerListadoproducto();
   }

  ObtenerListadoproducto(){

    this.productoservicio.ObtenerRegistros().subscribe((datos: Modeloproducto[]) => {
      this.listadoRegistros = datos;
    })

  }

}
