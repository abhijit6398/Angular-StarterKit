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
import { HttpClientModule } from '@angular/common/http';
import { GridModule } from '@progress/kendo-angular-grid';
// import { MenuModule } from '@progress/kendo-angular-menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { NotificationModule } from '@progress/kendo-angular-notification';
import { SharedModule } from './components/shared/shared.module';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
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
    GridModule,
    ButtonsModule,
    InputsModule,
    NotificationModule,
    SharedModule,
    IndicatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
