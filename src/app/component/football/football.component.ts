import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/service/league.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {
  leaguesM: any = [];
  leaguesW: any = [];
  sportIdentifier: string = "football";

  constructor(private leagueService: LeagueService) { }
 
}
