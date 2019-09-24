import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { AreaComponent } from './area/area.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciasComponent } from './existencias/existencias.component';


@NgModule({
  declarations: [EditorialComponent, AutoresComponent, TipoComponent, AreaComponent, LibroComponent, ExistenciasComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule
  ]
})
export class BibliotecaModule { }
