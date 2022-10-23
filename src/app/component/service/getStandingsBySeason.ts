import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { stats } from 'src/app/interface/stats'
import { leagueStanding } from 'src/app/interface/leagueStanding';






@Injectable({
  providedIn: 'root'
})
export class getStandingBySeason {
    private readonly apiServerUrl = environment.apiBaseUrl;
    private readonly apiServerKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  public get(leagueId:number):Observable<stats[]>{
    return this.http.get<stats[]>( `${this.apiServerUrl}/leagues/${leagueId}/standings/?${this.apiServerKey}`)
  }
}