import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  footballevents: any = [] ;
  hockeyevents: any = [] ;
  floorballevents: any = [] ;

  constructor(private eventService: EventService) { }
 
  ngOnInit(): void {
      this.getFootballData();
      this.getHockeyData();
      this.getFloorballData();
  }
  
  public getFootballData():void{
    this.eventService.getEventsForHome(119512).subscribe(res => 
      {this.footballevents = Object.values(res)[1]
      console.log(res)})
    }
  public getHockeyData():void{
    this.eventService.getEventsForHome(125472).subscribe(res => 
      {this.hockeyevents = Object.values(res)[1]
      console.log(res)})
    }
  public getFloorballData():void{
    this.eventService.getEventsForHome(121413).subscribe(res => 
      {this.floorballevents = Object.values(res)[1]
      console.log(res)})
    }
}

