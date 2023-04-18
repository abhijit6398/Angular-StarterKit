import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './components/authentication/authentication.module';

const routes: Routes = [
  {path:'',loadChildren:()=>{return AuthenticationModule}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
