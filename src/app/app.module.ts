import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { ThemeComponent } from './theme/theme.component';
import {UsersComponent} from './pages/administracion/users/users.component';
import { RolesComponent } from './pages/administracion/roles/roles.component';
import { AreasComponent } from './pages/setting/areas/areas.component';
import { AuthorsComponent } from './pages/setting/authors/authors.component';
import { BooksComponent } from './pages/setting/books/books.component';
import { CategoriesComponent } from './pages/setting/categories/categories.component';
import { SectionsComponent } from './pages/setting/sections/sections.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThemeComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    AreasComponent,
    AuthorsComponent,
    BooksComponent,
    CategoriesComponent,
    SectionsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
