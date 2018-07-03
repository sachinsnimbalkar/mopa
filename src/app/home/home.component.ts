import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrSlider: string [];

  ngOnInit () {
    this.httpService.get('./data/sliderdata.json').subscribe(
      data => {
        this.arrSlider = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
