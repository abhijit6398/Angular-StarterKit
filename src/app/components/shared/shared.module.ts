import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from '../modals/modals.component'; 
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsComponent } from '../charts/charts.component';
import { ChartsModule } from '@progress/kendo-angular-charts'; 


@NgModule({
  declarations: [ModalsComponent, ChartsComponent],
  imports: [
    CommonModule,
    DialogsModule,
    ButtonsModule,
    ChartsModule
  ],
  exports: [ModalsComponent, ChartsComponent]
})
export class SharedModule { }
