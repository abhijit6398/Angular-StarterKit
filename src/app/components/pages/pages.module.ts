import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddRecordComponent } from './add-record/add-record.component';


@NgModule({
  declarations: [
    DashbordComponent,
    AddRecordComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    RouterModule.forChild([
      {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard]},
      {path:'addrecord',component:AddRecordComponent,canActivate:[AuthGuard]}
    ])
  ]
})
export class PagesModule { }