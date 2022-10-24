import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { league } from 'src/app/interface/league'






@Injectable({
  providedIn: 'root'
})
export class getSeasonsForLeagueAndSport {
    private readonly apiServerUrl = environment.apiBaseUrl;
    private readonly apiServerKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  public get(leagueId:number):Observable<league[]>{
    return this.http.get<league[]>( `${this.apiServerUrl}/leagues/${leagueId}/seasons/?${this.apiServerKey}`)
  }
}