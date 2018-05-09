import { Component, OnInit } from '@angular/core';
import { Fitness, User, Routine } from '../models/fitness'
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
   Me = new User;

   private _api = "http://localhost:8080/"
  constructor(
    private http: Http,
    private _Routine: RoutineService,
    private _Router: Router
  ){
    this.Me.Name = "Dhaval"
    //this.Me = _Routine.Me;
    //if(!this.Me) {
      //_Router.navigate(['/login']);
  //}
}
    
  
ngOnInit() {
  }
selectTask(e: MouseEvent, text: string){
  e.preventDefault();

  if(this.MyChossenTask()) return;

  this.Model.ChossenTask.push({ Task: text, UserName: this.Me.Name, Completed: false });
  this.Model.Routine.splice( this.Model.Routine.indexOf(text), 1);
}  

MyChossenTask(): Routine | null{
  return this.Model.ChossenTask.find( x => x.UserName == this.Me.Name)
}

}
