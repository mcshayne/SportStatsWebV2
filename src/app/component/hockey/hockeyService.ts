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
  }
}