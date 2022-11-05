import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { league } from '../interface/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  constructor(private http: HttpClient) { }
  
    public getFootballLeaguesM():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=10&teamClass=MEN&apikey=26192887ec48f76ab54167238ae16688`)
    }

    public getFootballLeaguesW():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=10&teamClass=WOMEN&apikey=26192887ec48f76ab54167238ae16688`)
    }

    public getHockeyLeaguesM():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=2&teamClass=MEN&apikey=26192887ec48f76ab54167238ae16688`)
    }

    public getHockeyLeaguesW():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=2&teamClass=WOMEN&apikey=26192887ec48f76ab54167238ae16688`)
    }

    public getFloorballLeaguesM():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=4&teamClass=MEN&apikey=26192887ec48f76ab54167238ae16688`)
    }

    public getFloorballLeaguesW():Observable<league[]>{
      return this.http.get<league[]>(`https://api.everysport.com/v1/leagues?offset=0&sort=&sport=4&teamClass=WOMEN&apikey=26192887ec48f76ab54167238ae16688`)
    }


  }
