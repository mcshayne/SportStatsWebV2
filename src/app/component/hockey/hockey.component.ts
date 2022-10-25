import { Component, OnInit } from '@angular/core';
import { hockeyService } from './hockeyService';
import { Observable } from 'rxjs';
import { LeagueService } from 'src/app/service/league.service';

@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})


export class HockeyComponent {
  leagueId: number = 0;
  sports: any = [];

  public tableDiv:boolean = false;
  public leagueDiv:boolean = true;
  sportIdentifier: string = "hockey";


  constructor(private leagueService: LeagueService) { }

  public switchView(id:number) {
    this.leagueId = id;
    this.tableDiv = true;
    this.leagueDiv = false;
  }

  }
