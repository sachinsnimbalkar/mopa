import { Component, OnInit } from '@angular/core';
import {Event} from '../Model/events.model';
import { EventsService } from '../sevices/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
  event: Event[]=null;

  constructor(private eventService : EventsService ) {
  }

  ngOnInit() {
    this.eventService.getEventData().subscribe((data) => this.event=data );
  }
 

}
