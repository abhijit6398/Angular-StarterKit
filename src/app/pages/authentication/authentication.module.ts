import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { LoaderComponentComponent } from 'src/app/components/custom-loaderComponent/loader-component.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomModule } from 'src/app/components/custom.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoaderComponentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    CustomModule,
    IndicatorsModule,
    IconsModule,
    LayoutModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent },
      {path:'',component:HomeComponent,pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent}
    ])
  ]
})
export class AuthenticationModule { }
