import { Component, OnInit } from '@angular/core';
import { Fitness } from '../models/fitness'

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

   Model = new Fitness();
  constructor() { }

  ngOnInit() {
  }

}
