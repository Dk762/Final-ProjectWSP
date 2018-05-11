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
    http.get(this._api + "/routines", { params : { userName: this.Me.Name } }).subscribe(data=> this.Me.Routines = data.json())
    setInterval(()=> this.refresh(), 1000)
}
    
  
ngOnInit() {
  }

refresh(){
  this.http.get(this._api + "/state")
      .subscribe(data=> this.Model = data.json())
}
flipPicture(e: MouseEvent){
  this.http.post(this._api + "/picture",{})
        .subscribe();
}  
selectTask(e: MouseEvent, text: string){
  e.preventDefault();

  if(this.MyChosenTask()) return;

  this.http.post(this._api + "/routines", { Task: text, UserName: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.Routines.splice(this.Me.Routines.indexOf(text), 1 );
               
            }
        });
}  

MyChosenTask = () => this.Model.ChosenTask.find(x=> x.UserName == this.Me.Name );
ChosenTask = () => this.Model.ChosenTask.find( x => x.Chosen );

}
