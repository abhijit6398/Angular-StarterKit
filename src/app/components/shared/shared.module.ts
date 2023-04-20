import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component'; 
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from "@progress/kendo-angular-buttons";


@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    DialogsModule,
    ButtonsModule
  ],
  exports: [ModalsComponent]
})
export class SharedModule { }
