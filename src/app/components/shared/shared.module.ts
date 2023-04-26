import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component'; 
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from '@progress/kendo-angular-charts'; 
import { CustomInputComponent } from '../custom-input/custom-input.component'; 
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@NgModule({
  declarations: [ModalsComponent, ChartsComponent, CustomInputComponent, CustomButtonComponent],
  imports: [
    CommonModule,
    DialogsModule,
    ButtonsModule,
    ChartsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule
  ],
  exports: [ModalsComponent, ChartsComponent, CustomInputComponent, CustomButtonComponent]
})
export class SharedModule { }
