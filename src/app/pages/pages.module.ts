import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddRecordComponent } from './add-record/add-record.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component'; 
import { SharedModule } from '../components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ProfileComponent } from './profile/profile.component';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { InitialsPipe } from '../Custom Pipes/initials.pipe';
@NgModule({
  declarations: [
    DashbordComponent,
    AddRecordComponent,
    ProfileComponent,
    InitialsPipe
  ],
  imports: [
    CommonModule,
    GridModule,
    ButtonsModule,
    DialogsModule,
    ReactiveFormsModule,
    LabelModule,
    LayoutModule,
    SharedModule,
    DropDownsModule,
    RouterModule.forChild([
      {path:'dashbord',component:DashbordComponent,canActivate:[AuthGuard], pathMatch:'full' },
      {path:'addrecord',component:AddRecordComponent,canActivate:[AuthGuard]},
      {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
      { path: '**', component: NotFoundPageComponent }
    ])
  ]
})
export class PagesModule { }
