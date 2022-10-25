import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {

  sportIdentifier: string = "football";
  leagueId: number = 0;
  tableDiv: boolean = false;
  leagueDiv: boolean = true;

  constructor(private eventService: EventService) { }
 
  ngOnInit(): void {
}

  public switchView(id:number) {
    this.leagueId = id;
    this.tableDiv = true;
    this.leagueDiv = false;
  }
}