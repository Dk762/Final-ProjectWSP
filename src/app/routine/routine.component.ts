import { Component, OnInit } from '@angular/core';
import { Fitness, User } from '../models/fitness'
import { Router } from '@angular/router';
import { RoutineService } from '../services/routine.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

   Model = new Fitness();
   Me: User;

   private _api = "http://localhost:8080/"
  constructor(
    private http: Http,
    private _Routine: RoutineService,
    private _Router: Router
  ){
    this.Me = _Routine.Me;
    if(!this.Me) {
      _Router.navigate(['/login']);
  }
}
    
  
ngOnInit() {
  }
  

}
