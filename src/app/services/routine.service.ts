import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/fitness';
import { Router } from '@angular/router';

@Injectable()
export class RoutineService {
  
  Me: User;


  constructor(private http: Http, private _Router: Router) {

   }
   login(Name: string, Password: string){
     if(Password == '123'){
       this.Me = { Name: name };
       this._Router.navigate(['/routine']);
     }
   }

}
