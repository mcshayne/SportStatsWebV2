import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { getSeasonsForLeagueAndSport } from '../service/getSeasonsForLeagueAndSport';
import { getTeamsForLeagueBySeason } from '../service/getTeamsForLeagueBySeasonId';
import { getStandingBySeason } from '../service/getStandingsBySeason';
import { groups } from 'src/app/interface/groups';
import { EventService } from 'src/app/service/event.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
@Input()
leagueId:number = 0;

  //Could change to shorter names and opt in for hovering explaination of table headers.
  dC: string[] = ['#','Team','Played','Won','Drawn','Lost','For','Against','GD','P'];
  tableTitles: string[] = ['Place','Team','Played','Won games','Drawn games','Lost games','Goals for','Goals against','Goal difference','Points'];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsForSeason:string[] = ['season'];


 
  seasons: any = [];
  leagueStandings: any = [];
  statsForTeam: any =[];
  temp: any=[];
  events: any = [];



  constructor(private getStanding: getTeamsForLeagueBySeason
    ,private getSeasons: getSeasonsForLeagueAndSport
    ,private getStandingBySeason: getStandingBySeason
    ,private eventService: EventService) { }

  ngOnInit(): void {
    this.refreshViewData(this.leagueId)
  }

  public refreshViewData(leagueid:number){
    this.getTableData(leagueid);
    this.getMatches(leagueid);
  }

  seasonDataSource:any;
  teamPositionDataSource:any;
  statsDataSource:any;
        
  public getMatches(leagueId:number):void {
    this.eventService.getEventsForLeagueFinishedUpcoming(leagueId,'ALL').subscribe(res => 
      {this.events = Object.values(res)[1]
      console.log(res)})
    }
  
  public getTableData(leagueId:number):void{   

      this.getSeasons.get(leagueId).subscribe(res => {
          this.seasons = Object.values(res)[1]
          console.log(this.seasons)
          this.seasonDataSource = new MatTableDataSource(this.seasons)

        })

        this.getStandingBySeason.get(leagueId).subscribe(res=>{
          
          this.leagueStandings = Object.values(res).at(1)
          this.leagueStandings = Object.values(this.leagueStandings).at(0)
          this.leagueStandings = Object.values(this.leagueStandings).at(0)
          this.teamPositionDataSource = new MatTableDataSource(this.leagueStandings)
          for(let i = 0; i < this.leagueStandings.length; i++){
            //Set which team
            this.temp[i] = Object.values(this.leagueStandings.at(i))


            //Set stats
            for(let j = 0; j < this.temp[i].length;j++){
              if(this.temp[i].at(j).length == 8){
                this.statsForTeam[i] = Object.values(this.temp[i].at(j))
              }
            }
        
          }
          this.statsDataSource = new MatTableDataSource(this.statsForTeam)          
        })
  }

  public changeSeason(row: any){
    console.log(row)
    this.leagueId = row;
    this.refreshViewData(row)

  }
  public setMatches(status:string):void{
    console.log("hello")
    this.eventService.getEventsForLeagueFinishedUpcoming(this.leagueId,status).subscribe(res => 
      {this.events = Object.values(res)[1]
      console.log(res)})
  }

  public selectTeam(teamName: any){
    //Update matches according to which team was selected
    alert(teamName)
  }

}
