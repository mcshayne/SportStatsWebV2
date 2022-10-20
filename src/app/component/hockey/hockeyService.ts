import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { sport } from '../../interface/sport';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root'
})
export class hockeyService {
  private readonly apiServerUrl = environment.apiBaseUrl;
  private readonly apiServerKey = environment.apiKey;
 
  constructor(private http: HttpClient) { }

  public getSports():Observable<sport[]>{
    return this.http.get<sport[]>( `${this.apiServerUrl}/leagues/119512/events?${this.apiServerKey}&limit=3`)
    //`http://api.everysport.com/v1/leagues/119512/events?apikey=26192887ec48f76ab54167238ae16688&limit=3`
    //.pipe(map((sports:sport[])=>Object.values(sports)))
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