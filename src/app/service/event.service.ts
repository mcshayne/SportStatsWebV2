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
      return this.http.get<Event[]>(`${this.apiServerUrl}/leagues/${leagueId}/events/?${this.apiServerKey}&limit=5`)

    }
    

    public getEventsForLeagueFinishedUpcoming(leagueId:number,status:string):Observable<Event[]>{
      return this.http.get<Event[]>(`${this.apiServerUrl}/leagues/${leagueId}/events/?sort=startDate%3Adesc&status=${status}&${this.apiServerKey}&limit=20`)

    }

  }
