import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public imagesUrl;
 
ngOnInit() {
    this.imagesUrl = [
    '../assets/IMAGE_URL3.jpg',
    '../assets/IMAGE_URL3.jpg',
    '../assets/IMAGE_URL3.jpg',
    
    ];
}
}
