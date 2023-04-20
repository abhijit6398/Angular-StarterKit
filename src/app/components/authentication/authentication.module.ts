import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { LoaderComponentComponent } from '../loader-component/loader-component.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { CustomButtonComponent } from '../custom-button/custom-button.component'; 

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    CustomInputComponent,
    LoaderComponentComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    IndicatorsModule,
    RouterModule.forChild([
      // {path:'',redirectTo :'/login'},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ])
  ]
})
export class AuthenticationModule { }
