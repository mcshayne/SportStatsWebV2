import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { getSeasonsForLeagueAndSport } from '../service/getSeasonsForLeagueAndSport';
import { getTeamsForLeagueBySeason } from '../service/getTeamsForLeagueBySeasonId';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface sportTable{
  symbol:number;
  Lag:string;
  M:number;
  V:number;
  O:number;
  F:number;
  GM:number;
  IM:number;
  MS:number;
  P:number;
}

const test_data:sportTable [] = [{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}
,{symbol:1,Lag:'BK Häcken',M:26,V:15,O:9,F:2,GM:58,IM:32,MS:26,P:54}];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dC: string[] = ['symbol','Lag','M','V','O','F','GM','IM','MS','P'];
  testSource = test_data;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsForSeason:string[] = ['season'];
  dataSource = ELEMENT_DATA;

  teams:any = [];
  seasons: any = [];
  constructor(private getStanding: getTeamsForLeagueBySeason,private getSeasons: getSeasonsForLeagueAndSport ) { }

  ngOnInit(): void {
    this.getTableData();
  }

  seasonDataSource:any;
  public getTableData():void{   
/*    this.getStanding.getTeamsForLeagueBySeason(2021,10).subscribe(res =>   {
        console.log(Object.values(res)[1])
        this.teams = Object.values(res)[1]
      })*/
      this.getSeasons.get(124439).subscribe(res => {
          console.log(Object.values(res)[1])
          this.seasons = Object.values(res)[1]
          this.seasonDataSource = new MatTableDataSource(this.seasons)
        })
  }

  public foobar(){
    alert("foobar");
  }

}