import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Fare } from './fare';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  private _url : string = "http://localhost:9091/v1";
  constructor(private http: HttpClient) { }

  getFares(): Observable<Fare[]>{
    /*return [
    {"id":1, "basefare": 500},
    {"id":2, "basefare": 500},
    {"id":3, "basefare": 500},
    {"id":4, "basefare": 500}
];*/
  return this.http.get<Fare[]>(this._url+"/flights");
}

addFare(fare:Fare): Observable<Fare[]>{
  console.log(fare)
  return this.http.post<Fare[]>(this._url + "/flight/"+fare.flightId, fare);
}

getFareById(flightId): Observable<Fare>{
  /*return [
  {"id":1, "basefare": 500},
  {"id":2, "basefare": 500},
  {"id":3, "basefare": 500},
  {"id":4, "basefare": 500}
];*/
return this.http.get<Fare>(this._url+"/flight/"+flightId );
}

deleteFareById(flightId): Observable<Fare>{
  /*return [
  {"id":1, "basefare": 500},
  {"id":2, "basefare": 500},
  {"id":3, "basefare": 500},
  {"id":4, "basefare": 500}
];*/
return this.http.delete<Fare>(this._url+"/flight/"+flightId );
}


errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
