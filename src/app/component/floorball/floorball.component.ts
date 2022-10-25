import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/service/league.service';

@Component({
  selector: 'app-floorball',
  templateUrl: './floorball.component.html',
  styleUrls: ['./floorball.component.css']
})
export class FloorballComponent {
  leaguesM: any = [];
  leaguesW: any = [];
  sportIdentifier: string = "floorball";
  
  constructor(private leagueService: LeagueService) { }
 
  ngOnInit(): void {
    this.getDataM();
    this.getDataW();
}

public getDataM():void{
  this.leagueService.getFloorballLeaguesM().subscribe(res => 
    {this.leaguesM = Object.values(res)[1]
        console.log(res)})
  }

  public getDataW():void{
    this.leagueService.getFloorballLeaguesW().subscribe(res => 
      {this.leaguesW = Object.values(res)[1]
          console.log(res)})
    }
  }

