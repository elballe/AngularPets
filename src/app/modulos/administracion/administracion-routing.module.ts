import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent
  },
  {
    path: "buscar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path:'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path:'editar-mascota/:id',
    component: EditarMascotaComponent 
  },
   {
    path:'eliminar-mascota/:id',
    component: EliminarMascotaComponent 
  },
  {
    path:'buscar-producto',
    component: BuscarProductoComponent
  },
  {
    path:'crear-producto',
    component: CrearProductoComponent
  },
  {
    path:'editar-producto/:id',
    component: EditarProductoComponent
  },
  {
    path:'listar-producto',
    component: BuscarProductoComponent
  },
  {
    path:'eliminar-producto/:id',
    component: EliminarProductoComponent
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
