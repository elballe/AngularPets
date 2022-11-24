import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelomascota } from '../modelos/mascota.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SeguridadService} from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class mascotaService {
url = 'http://localhost:3000';
token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<Modelomascota[]>{
    return this.http.get<Modelomascota[]>(`${this.url}/mascotas`);
  }

  ObtenerRegistrosPorId(id: string): Observable<Modelomascota>{
    return this.http.get<Modelomascota>(`${this.url}/mascotas/${id}`);
  }
  
   
  crearmascota(mascota: Modelomascota): Observable<Modelomascota>{
    return this. http.post<Modelomascota>(`${this.url}/mascotas`, mascota, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

   }

   
  Actualizarmascota(mascota: Modelomascota): Observable<Modelomascota>{
    return this. http.put<Modelomascota>(`${this.url}/mascotas/${mascota.id}`, mascota, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

   }

    Eliminarmascota(id: string): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`, {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
       })
    })

  }
}
