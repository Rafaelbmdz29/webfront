import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { ThemeComponent } from './theme/theme.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AdministracionComponent} from './pages/administracion/administracion.component';
import {BibliotecaComponent} from './pages/biblioteca/biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThemeComponent,
    DashboardComponent,
    AdministracionComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
