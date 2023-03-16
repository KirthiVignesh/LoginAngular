import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'**',component:ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
