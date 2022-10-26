import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { team } from 'src/app/interface/team'






@Injectable({
  providedIn: 'root'
})
export class getTeamsForLeagueBySeason {
    private readonly apiServerUrl = environment.apiBaseUrl;
    private readonly apiServerKey = environment.apiKey;
  constructor(private http: HttpClient) { }

  public getTeamsForLeagueBySeason(season:number,sportId:number):Observable<team[]>{
    return this.http.get<team[]>( `${this.apiServerUrl}/leagues/?sport=${sportId}&activeDate=${season}&${this.apiServerKey}`)
  }
}