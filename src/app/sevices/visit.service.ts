import { Injectable } from '@angular/core';
import { Visit } from '../Model/visit.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class VisitService {
  

  constructor( private http: Http) { }
  getVisit() : Observable<Visit []>{
    return this.http.get('../data/visitdata.json')
    .map((resp: Response)=>resp.json());
  }
}
