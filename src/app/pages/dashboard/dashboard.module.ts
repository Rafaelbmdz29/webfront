import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalitycsComponent } from './analitycs.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [DashboardComponent, AnalitycsComponent, HistoryComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
