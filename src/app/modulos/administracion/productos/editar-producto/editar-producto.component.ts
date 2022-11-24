import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modeloproducto } from 'src/app/modelos/producto.modelo';
import { productoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
id:string = '';
  fgvalidador: FormGroup = this.fb.group({
   
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
    

  });
  constructor(private fb: FormBuilder,
    private servicioproducto: productoService,
    private router: Router,
    private route: ActivatedRoute){}
    

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"]
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioproducto.ObtenerRegistrosPorId(this.id).subscribe((datos:Modeloproducto) => {
      this.fgvalidador.controls["id"].setValue(this.id);
      this.fgvalidador.controls["tipo"].setValue(datos.tipo);
      this.fgvalidador.controls["nombre"].setValue(datos.nombre);
      this.fgvalidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgvalidador.controls["precio"].setValue(datos.precio);
    });
  }

  Editarproducto(){
    let tipo = this.fgvalidador.controls["tipo"].value;
    let nombre = this.fgvalidador.controls["nombre"].value;
    let descripcion = this.fgvalidador.controls["descripcion"].value;
    let precio = parseInt(this.fgvalidador.controls["precio"].value);
    
    let p = new Modeloproducto();
   
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id = this.id;
    
    this.servicioproducto.Actualizarproducto(p).subscribe((datos: Modeloproducto) => {
    alert("producto actualizado correctamente");  
  this.router.navigate(["/administracion/listar-producto"]);
  }, (error:any) => {
    alert("Error actualizando el producto");
  })
}
}

