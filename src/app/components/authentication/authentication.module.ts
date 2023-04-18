import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    RouterModule.forChild([
      // {path:'',redirectTo :'/login'},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ])
  ]
})
export class AuthenticationModule { }
