import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{path:'',redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePageComponent},
{path:'**',component:ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
