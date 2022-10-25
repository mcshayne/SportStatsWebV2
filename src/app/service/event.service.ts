import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly apiServerUrl = environment.apiBaseUrl;
  private readonly apiServerKey = environment.apiKey;
  constructor(private http: HttpClient) { }
  
    public getEventsForHome(leagueId:number):Observable<Event[]>{
      return this.http.get<Event[]>(`${this.apiServerUrl}/leagues/${leagueId}/events/?${this.apiServerKey}&limit=3`)
      //http://api.everysport.com/v1/leagues/119512/events?apikey=26192887ec48f76ab54167238ae16688&limit=3
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

    public getEventsForFootball(leagueId:number):Observable<Event[]>{
      return this.http.get<Event[]>(`${this.apiServerUrl}/leagues/${leagueId}/events/?${this.apiServerKey}&limit=50`)
      //http://api.everysport.com/v1/leagues/119512/events?apikey=26192887ec48f76ab54167238ae16688&limit=50
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
