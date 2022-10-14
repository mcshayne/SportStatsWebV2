import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FootballComponent } from './football/football.component';
import { HockeyComponent } from './hockey/hockey.component';
import { FloorballComponent } from './floorball/floorball.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';

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
