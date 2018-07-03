import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {Event} from '../Model/events.model';
import { EventsService } from '../sevices/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
   providers: [EventsService]
})
export class EventsComponent implements OnInit {
  
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('./assets/Birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  }

  // event: Event[]=null;
  // constructor(private eventService : EventsService ) {
  // }

  // ngOnInit() {
  //   this.eventService.getEventData().subscribe((data) => this.event=data );
  // }
 


