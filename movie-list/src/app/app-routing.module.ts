import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, LoginModule } from './pages/login';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginComponent,
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
