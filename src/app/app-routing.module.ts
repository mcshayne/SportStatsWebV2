import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FloorballComponent } from './floorball/floorball.component';
import { FootballComponent } from './football/football.component';
import { HockeyComponent } from './hockey/hockey.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'home', component: HomeComponent},
  {path:'football', component: FootballComponent},
  {path:'hockey', component: HockeyComponent},
  {path:'floorball', component: FloorballComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
