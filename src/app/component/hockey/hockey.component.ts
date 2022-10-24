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
  leaguesM: any = [];
  leaguesW: any = [];
  sports: any = [];
  public tableDiv:boolean = false;
  public leagueDiv:boolean = true;
  constructor(private leagueService: LeagueService) { }
 
  ngOnInit(): void {
    this.getDataM();
    this.getDataW();
}

public getDataM():void{
  this.leagueService.getHockeyLeaguesM().subscribe(res => 
    {this.leaguesM = Object.values(res)[1]
    console.log(res)})
  }

  public getDataW():void{
    this.leagueService.getHockeyLeaguesW().subscribe(res => 
      {this.leaguesW = Object.values(res)[1]
      console.log(res)})
    }



    public switchDiv () {
      
      
      this.tableDiv = true;
      this.leagueDiv = false;
    }
  }
