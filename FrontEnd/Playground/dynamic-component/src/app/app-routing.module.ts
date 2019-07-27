import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    redirectTo: '/dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
