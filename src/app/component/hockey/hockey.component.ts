import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sport } from './sport';



@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})
export class HockeyComponent implements OnInit {
  totalAngularPackages: any;
  public test:sport [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.getData();
  
  }
  public getData():void{
    this.http.get<sport[]>('http://api.everysport.com/v1/sports?apikey=26192887ec48f76ab54167238ae16688').subscribe(data=>{
      this.totalAngularPackages = data;
      console.log(data);
      console.log(this.totalAngularPackages);
      this.test = this.totalAngularPackages;
      console.log(this.test);
    })
  }
 
}
