import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { slider} from '../Model/slider.model';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  selectedSlider: slider;
  slider : slider[];
  //constructor(private http : Http) { }
  constructor(private http:Http)  
  {  
   
  }

  getSliderData(): Observable <slider[]> {
    return this.http.get('../data/sligerdata.json')
    .map((res: Response)=>
     res.json());
    
  
}
}
