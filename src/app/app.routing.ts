import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
},
{
    path: 'pages',
    component: ThemeComponent,
    children: [
      {
        path: 'administracion',
        loadChildren: './pages/administracion/administracion.module#AdministracionModule'
      },
    {
    path: 'setting',
    loadChildren: './pages/setting/setting.module#SettingModule'
    },
      {
        path: 'biblioteca',
        loadChildren: './pages/biblioteca/biblioteca.module#BibliotecaModule'
      },
    {
    path: '',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    }
]
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: []})

export class AppRoutingModule {}
