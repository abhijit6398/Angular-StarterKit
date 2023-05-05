import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalsComponent } from './custom-modals/modals.component'
import { DialogsModule } from '@progress/kendo-angular-dialog'
import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { ChartsComponent } from './custom-charts/charts.component'
import { ChartsModule } from '@progress/kendo-angular-charts'
import { CustomInputComponent } from './custom-input/custom-input.component'
import { InputsModule } from '@progress/kendo-angular-inputs'
import { LabelModule } from '@progress/kendo-angular-label'
import { ReactiveFormsModule } from '@angular/forms'
import { CustomButtonComponent } from './custom-button/custom-button.component'
import { CustomTextareaComponent } from './custom-textarea/custom-textarea.component'

@NgModule({
  declarations: [
    ModalsComponent,
    ChartsComponent,
    CustomInputComponent,
    CustomButtonComponent,
    CustomTextareaComponent,
  ],
  imports: [
    CommonModule,
    DialogsModule,
    ButtonsModule,
    ChartsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalsComponent,
    ChartsComponent,
    CustomInputComponent,
    CustomButtonComponent,
    CustomTextareaComponent,
  ],
})
export class CustomModule {}
