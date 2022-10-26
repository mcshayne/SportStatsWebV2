import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { SportComponent } from './component/sport/sport.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'sport/:sportName',component:SportComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


