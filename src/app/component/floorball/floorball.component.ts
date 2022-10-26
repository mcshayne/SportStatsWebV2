import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floorball',
  templateUrl: './floorball.component.html',
  styleUrls: ['./floorball.component.css']
})
export class FloorballComponent {
  sportIdentifier: string = "floorball";
  leagueId: number = 0;
  tableDiv: boolean = false;
  leagueDiv: boolean = true;
  
  constructor() { }
 
  ngOnInit(): void {
  }

    public switchView(id:number) {
      this.leagueId = id;
      this.tableDiv = true;
      this.leagueDiv = false;
    }
  }

