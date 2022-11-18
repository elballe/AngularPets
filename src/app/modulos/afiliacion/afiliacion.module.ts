import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { SolicitarAfiliacionComponent } from './solicitar-afiliacion/solicitar-afiliacion.component';
import { AprobarSolicitudComponent } from './aprobar-solicitud/aprobar-solicitud.component';
import { EditarAfiliacionComponent } from './editar-afiliacion/editar-afiliacion.component';
import { BuscarAfiliacionComponent } from './buscar-afiliacion/buscar-afiliacion.component';


@NgModule({
  declarations: [
    SolicitarAfiliacionComponent,
    AprobarSolicitudComponent,
    EditarAfiliacionComponent,
    BuscarAfiliacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule
  ]
})
export class AfiliacionModule { }
