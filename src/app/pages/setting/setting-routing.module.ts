import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreasComponent} from './areas/areas.component';
import {AuthorsComponent} from './authors/authors.component';
import {BooksComponent} from './books/books.component';
import {CategoriesComponent} from './categories/categories.component';
import {SectionsComponent} from './sections/sections.component';


const routes: Routes = [
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sectios',
    component: SectionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
