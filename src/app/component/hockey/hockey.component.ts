import { Component, OnInit } from '@angular/core';
import { sport } from './sport';
import { hockeyService } from './hockeyService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})

export class HockeyComponent implements OnInit {
  sports: sport[] | undefined;
  temp!: sport;

  constructor(private hockeyService: hockeyService) { }
 
  ngOnInit(): void {
      this.getData();

  
  }
  public getData():void{
    this.hockeyService.getEmployees().subscribe((res ) => {   
         this.sports = res
         this.temp = res[1];
         console.log(res[1]);
        }

  
    )

    
    /* this.hockeyService.getEmployees().subscribe((sports)=>{ console.log(sports)
      this.sports = sports.map((sport) =>({
        id: sport.id,
        name: sport.name,
        slug:sport.slug
      }))

      }); */
    }
  }
