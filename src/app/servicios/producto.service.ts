import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modeloproducto } from '../modelos/producto.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SeguridadService} from './seguridad.service';
import { Modelomascota } from '../modelos/mascota.modelo';

@Injectable({
  providedIn: 'root'
})
export class productoService {
  ObtenerDatos() {
    throw new Error('Method not implemented.');
  }
  Crearproducto(p: Modeloproducto) {
    throw new Error('Method not implemented.');
  }
  crearmascota(p: Modelomascota) {
    throw new Error('Method not implemented.');
  }
url = 'http://localhost:3000';
token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<Modeloproducto[]>{
    return this.http.get<Modeloproducto[]>(`${this.url}/producto`);
  }

  ObtenerRegistrosPorId(id: string): Observable<Modeloproducto>{
    return this.http.get<Modeloproducto>(`${this.url}/producto/${id}`);
  }
   
   
  crearproducto(producto: Modeloproducto): Observable<Modeloproducto>{
    return this. http.post<Modeloproducto>(`${this.url}/producto`, producto, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

   }

   
  Actualizarproducto(producto: Modeloproducto): Observable<Modeloproducto>{
    return this. http.put<Modeloproducto>(`${this.url}/producto/${producto.id}`, producto, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

   }

    Eliminarproducto(id: string): Observable<any>{
    return this.http.delete(`${this.url}/producto/${id}`, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

  }
}
