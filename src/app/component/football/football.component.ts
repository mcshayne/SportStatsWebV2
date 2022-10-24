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
  
  constructor(private leagueService: LeagueService) { }
 
  ngOnInit(): void {
      this.getDataM();
      this.getDataW();
  }
  
  public getDataM():void{
    this.leagueService.getFootballLeaguesM().subscribe(res => 
      {this.leaguesM = Object.values(res)[1]
      console.log(res)})
    }
  
    public getDataW():void{
      this.leagueService.getFootballLeaguesW().subscribe(res => 
        {this.leaguesW = Object.values(res)[1]
        console.log(res)})
      }
}
