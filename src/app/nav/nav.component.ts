import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../services/routine.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public Routine: RoutineService) {
    
  }

  ngOnInit() {
  }

}
