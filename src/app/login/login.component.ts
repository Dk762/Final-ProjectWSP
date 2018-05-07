import { Component, OnInit } from '@angular/core';
import { RoutineService } from '../services/routine.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Routine: RoutineService) { }

  ngOnInit() {
  }

  login(Name: string, Password: string){
    this._Routine.login(Name, Password);
  }
}
