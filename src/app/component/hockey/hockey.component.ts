import { Component, OnInit } from '@angular/core';
import { hockeyService } from './hockeyService';
import { Observable } from 'rxjs';
import { LeagueService } from 'src/app/service/league.service';
import { Output, EventEmitter } from '@angular/core';

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
  items = ([this.leagueId, true, false])

  constructor(private leagueService: LeagueService) { }

  public switchView(id:string) {
    console.log(id)
  }

  }
