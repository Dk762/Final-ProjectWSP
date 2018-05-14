import { Component, OnInit } from '@angular/core';
import { Fitness, User, Routine } from '../models/fitness'
import { Router } from '@angular/router';
import { RoutineService } from '../services/routine.service';
import { Http } from "@angular/http";
import { MessagesService } from '../services/messages.service';

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
    private _Router: Router,
    private _Messages: MessagesService
  ){
    this.Me = _Routine.Me;
        if(!this.Me){
            _Router.navigate(['/login']);
        }
        this.join(this.Me.Name);
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
chooseTask(e: MouseEvent, text: string){
  e.preventDefault();

  if(this.MyCompletedTask()) return;

  this.http.post(this._api + "/routines/choose", { Task: text, UserName: this.Me.Name })
      .subscribe(data=> {
          if(data.json().success){
              this.Me.ChosenTask.splice(this.Me.Routines.indexOf(text), 1);
          }
      });
}
join(name: string){
  this._Messages.Messages.push({ Text: 'You\'ve joined this app. Welcome ' + name , Type: 'success'})
  this.http.get(this._api + "/routines", { params : { userName: name } })
  .subscribe(data=> this.Me.Routines = data.json() )
}




MyChosenTask = () => this.Model.ChosenTask.find(x=> x.UserName == this.Me.Name );
MyCompletedTask = () => this.Model.CompletedTask.find(x=> x.UserName == this.Me.Name);


}
