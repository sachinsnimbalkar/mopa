import { Component, OnInit } from '@angular/core';
import { VisitService } from '../sevices/visit.service';
import { Visit}  from '../Model/visit.model'; 
@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css'],
  providers: [VisitService]
})
export class VisitComponent implements OnInit {
    visits: Visit[]=null;

  constructor(private visitService: VisitService) { }

  ngOnInit() {
    this.visitService.getVisit().subscribe((vdata) => this.visits=vdata);
  }

}
