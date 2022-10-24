import { isNgTemplate } from '@angular/compiler';
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
      console.log(res)
      let tempId = [new Set(this.leaguesM.map((item: { id:number}) => item.id))]
      let tempName = [new Set(this.leaguesM.map((item: { name:string}) => item.name))]
      console.log(tempId)
      console.log(tempName)
    })
    }
  
    public getDataW():void{
      this.leagueService.getFootballLeaguesW().subscribe(res => 
        {this.leaguesW = Object.values(res)[1]
        console.log(res)})
      }
}
