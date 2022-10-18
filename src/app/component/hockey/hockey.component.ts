import { Component, OnInit } from '@angular/core';
import { sport } from './sport';
import { hockeyService } from './hockeyService';


@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})

export class HockeyComponent implements OnInit {
  public sports:sport [] = [];

  constructor(private hockeyService: hockeyService) { }

  ngOnInit(): void {
      this.getData();
      console.log(this.sports);
  
  }
  public getData():void{
    this.hockeyService.getEmployees().subscribe(
      (response: sport[]) =>{
        console.log(response);
        this.sports = response;
      }
    );
    }}
