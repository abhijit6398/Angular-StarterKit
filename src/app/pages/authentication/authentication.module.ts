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
import {SharedModule} from '../../components/shared/shared.module';
import { LoaderComponentComponent } from 'src/app/components/loader-component/loader-component.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
    SharedModule,
    IndicatorsModule,
    IconsModule,
    LayoutModule,
    RouterModule.forChild([
      {path:'login',component:LoginComponent },
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent}
    ])
  ]
})
export class AuthenticationModule { }
