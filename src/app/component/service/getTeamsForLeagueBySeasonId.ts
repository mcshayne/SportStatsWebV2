import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../model/team';







@Injectable({
  providedIn: 'root'
})
export class getTeamsForLeagueBySeason {
    private readonly apiServerUrl = environment.apiBaseUrl;
    private readonly apiServerKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  public getTeamsForLeagueBySeason(season:number,sportId:number):Observable<Team[]>{
    return this.http.get<Team[]>( `${this.apiServerUrl}/leagues/?sport=${sportId}&activeDate=${season}&${this.apiServerKey}`)
  }
}