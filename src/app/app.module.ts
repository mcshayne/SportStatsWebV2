import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'; 

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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
