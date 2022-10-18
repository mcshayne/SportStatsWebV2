import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { sport } from './sport';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';






@Injectable({
  providedIn: 'root'
})
export class hockeyService {

  constructor(private http: HttpClient) { }

  public getEmployees():Observable<sport[]>{
    return this.http.get<sport[]>(`http://api.everysport.com/v1/sports?apikey=26192887ec48f76ab54167238ae16688`)
    .pipe(map((sports:sport[])=>Object.values(sports)))
   /*  .pipe(map((sports:sport[])=>{
      return sports.map(sports =>({
        id:sports.id,
        name:sports.name
      }))
    })) */
    //(`http://api.everysport.com/v1/sports?apikey=26192887ec48f76ab54167238ae16688`)
    //`https://jsonplaceholder.typicode.com/users`
  }
}