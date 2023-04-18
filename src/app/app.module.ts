import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LayoutModule } from "@progress/kendo-angular-layout";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LabelModule } from "@progress/kendo-angular-label";
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { IntlModule } from '@progress/kendo-angular-intl';
import { IconsModule } from '@progress/kendo-angular-icons';
import {HttpClientModule} from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    PopupModule,
    LabelModule,
    DialogsModule,
    IntlModule,
    IconsModule,
    NavigationModule,
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }