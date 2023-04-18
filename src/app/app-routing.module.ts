import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { PagesModule } from './components/pages/pages.module';

const routes: Routes = [
  {path:'',loadChildren:()=>{return AuthenticationModule}},
  {path:'pages',loadChildren:()=>{return PagesModule}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
