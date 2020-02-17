import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule, LoginComponent } from './pages/login';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
