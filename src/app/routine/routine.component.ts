import { Component, OnInit } from '@angular/core';
import { Fitness, User, Routine } from '../models/fitness'
import { Router } from '@angular/router';
import { RoutineService } from '../services/routine.service';
import { Http } from "@angular/http";

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

   Model = new Fitness();
   Me = new User();

   private _api = "http://localhost:8080/fitness";
  constructor(
    private http: Http,
    private _Routine: RoutineService,
    private _Router: Router
  ){
    this.Me.Name = "Dhaval"
    http.get(this._api + "/routines").subscribe(data=> this.Me.Routines = data.json())
    
}
    
  
ngOnInit() {
  }
selectTask(e: MouseEvent, text: string){
  e.preventDefault();

  if(this.MyChosenTask()) return;

  this.Model.ChosenTask.push({ Task: text, UserName: this.Me.Name, Chosen: false });
  this.Me.Routines.splice( this.Me.Routines.indexOf(text), 1);
}  

MyChosenTask = () => this.Model.ChosenTask.find(x=> x.UserName == this.Me.Name );
ChosenTask = () => this.Model.ChosenTask.find( x => x.Chosen );

}
