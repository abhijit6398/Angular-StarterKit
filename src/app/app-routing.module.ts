import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:'',loadChildren:()=>{return AuthenticationModule}},
  {path:'',loadChildren:()=>{return PagesModule}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
