import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { SidebarComponent } from './component/main/sidebar/sidebar.component';
import { TableComponent } from './component/table/table.component';
import { LeagueComponent } from './component/league/league.component';
import { SportComponent } from './component/sport/sport.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    LeagueComponent,
    SportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
],
providers: [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}} // Used by contact.component
],
  bootstrap: [AppComponent]
})
export class AppModule { }
