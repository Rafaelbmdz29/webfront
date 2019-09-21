import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca.component';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreasComponent } from './areas/areas.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';


@NgModule({
  declarations: [
    BibliotecaComponent,
    EditorialComponent,
    AutoresComponent,
    TipoComponent,
    AreasComponent,
    LibroComponent,
    ExistenciaComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
