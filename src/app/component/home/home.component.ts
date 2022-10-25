import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  events: any = [] ;

  constructor(private eventService: EventService) { }
 
  ngOnInit(): void {
      this.getData();
  }
  
  public getData():void{
    this.eventService.getEventsForHome().subscribe(res => 
      {this.events = Object.values(res)[1]
      console.log(res)})
    }
}
