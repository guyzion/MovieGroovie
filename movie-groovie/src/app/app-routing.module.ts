import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule, LoginComponent } from './pages/login';


const routes: Routes = [
  {path: '', redirectTo: '/login' ,pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
