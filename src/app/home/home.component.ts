import { Component, OnInit } from '@angular/core';
import {slider} from '../Model/slider.model';
import { SliderService } from '../sevices/slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SliderService]
})
export class HomeComponent implements OnInit {
  
  slider: slider[]=null;
   
  constructor(private sliderService : SliderService ) {
  }
 
  ngOnInit() {
    this.sliderService.getSliderData().subscribe((data) => this.slider=data );
  }

}
