import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit  {

  leagueId: number = 0;
  tableDiv: boolean = false;
  leagueDiv: boolean = true;
  sportIdentifier: string = "";
  sub: any;


  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sportIdentifier = params['sportName'];
      
    });
    console.log(this.sportIdentifier)
  }

  public switchView(id:number) {
    this.leagueId = id;
    this.tableDiv = true;
    this.leagueDiv = false;
  }
}
