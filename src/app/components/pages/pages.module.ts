import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddRecordComponent } from './add-record/add-record.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component'; 
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    DashbordComponent,
    AddRecordComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    ButtonsModule,
    DialogsModule,
    SharedModule,
    RouterModule.forChild([
      {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard], pathMatch:'full'},
      {path:'addrecord',component:AddRecordComponent,canActivate:[AuthGuard]},
      { path: '**', component: NotFoundPageComponent }
    ])
  ]
})
export class PagesModule { }
