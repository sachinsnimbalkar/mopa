import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Event} from '../Model/events.model';
import {ROOT_URL, event} from '../Config';  
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // private _url= 'data/eventdata';
  // constructor(private _http: Http) {}
  // getHerbs () {
  //   return this._http.get(this._url)
  //     .map((response: Response) => response.json());
  // }
  selectedEvent: event;
  event : Event[];
  constructor(private http:Http) { }

  getEventData(): Observable <Event[]> {
    return this.http.get('../../data/eventdata.json')
    .map((res: Response)=>res.json());
  }
}
