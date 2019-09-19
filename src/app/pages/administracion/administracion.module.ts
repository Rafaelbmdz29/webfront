import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AdministracionComponent } from './administracion.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';


@NgModule({
  declarations: [AdministracionComponent, UsersComponent, RolesComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
