import { NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import {UsersComponent} from './pages/administracion/users/users.component';
import { RolesComponent } from './pages/administracion/roles/roles.component';
import { AreasComponent } from './pages/setting/areas/areas.component';
import { AuthorsComponent } from './pages/setting/authors/authors.component';
import { BooksComponent } from './pages/setting/books/books.component';
import { CategoriesComponent } from './pages/setting/categories/categories.component';
import { SectionsComponent } from './pages/setting/sections/sections.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes:Routes = [{

    path:'login',
    component:LoginComponent

},

{
    path: 'pages',
    component: ThemeComponent,
    children: [
    {
    path: 'sections',
    component: SectionsComponent
    },    
    {
    path: 'categories',
    component: CategoriesComponent
    },
    {
    path:'books',
    component: BooksComponent
    },
    {
    path: 'authors',
    component: AuthorsComponent
    },
    {
    path: 'areas',
    component: AreasComponent
    },
    {
    path: 'roles',
    component: RolesComponent
    },
    {
    path: 'dashboard',
    component: DashboardComponent
    },
    {
    path:'users',
    component: UsersComponent
    },
    {
    path: '',
    loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
    }
]
}
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash:true})],
    exports:[RouterModule],
    providers:[]})

export class AppRoutingModule {}