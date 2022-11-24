import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modeloproducto } from 'src/app/modelos/producto.modelo';
import { productoService } from 'src/app/servicios/producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
    

  });
  constructor(private fb: FormBuilder,
    private servicioproducto: productoService,
    private router: Router){}
    

  ngOnInit(): void {
  }

  Guardarproducto(){
    let tipo = this.fgvalidador.controls["tipo"].value;
    let nombre = this.fgvalidador.controls["nombre"].value;
    let descripcion = this.fgvalidador.controls["descripcion"].value;
    let precio = parseInt(this.fgvalidador.controls["precio"].value);
        let p = new Modeloproducto();
    
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    
    this.servicioproducto.crearproducto(p).subscribe((datos: Modeloproducto) => {
    alert("producto almacenado correctamente");  
  this.router.navigate(["/administracion/listar-producto"]);
  }, (error:any) => {
    alert("Error almacenando el producto");
  })
}
}
