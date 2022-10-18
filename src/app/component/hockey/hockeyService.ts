import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { sport } from './sport';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class hockeyService {

  constructor(private http: HttpClient) { }


  public getEmployees():Observable<sport[]>{
    return this.http.get<sport[]>
    (`http://api.everysport.com/v1/sports?apikey=26192887ec48f76ab54167238ae16688`);
  }


}
