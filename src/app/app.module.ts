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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { FootballComponent } from './component/football/football.component';
import { HockeyComponent } from './component/hockey/hockey.component';
import { FloorballComponent } from './component/floorball/floorball.component';
import { NavbarComponent } from './component/main/navbar/navbar.component';
import { SidebarComponent } from './component/main/sidebar/sidebar.component';
import { TableComponent } from './component/table/table.component';
import { LeagueComponent } from './component/league/league.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    ContactComponent,
    FootballComponent,
    HockeyComponent,
    FloorballComponent,
    NavbarComponent,
    SidebarComponent,
    TableComponent,
    LeagueComponent,
    
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
    BrowserAnimationsModule
],
providers: [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}} // Used by contact.component
],
  bootstrap: [AppComponent]
})
export class AppModule { }
