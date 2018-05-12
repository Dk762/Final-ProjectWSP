import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ng-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { RoutineComponent } from './routine/routine.component';
import { LoginComponent } from './login/login.component';
import { RoutineService } from './services/routine.service';
import { CarouselConfig } from 'ng-bootstrap/carousel/carousel.config';
import { TopsliderComponent } from './topslider/topslider.component';
import { MessagesService } from './services/messages.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    RoutineComponent,
    LoginComponent,
    TopsliderComponent,
    
  ],
  imports: [

    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent },
      {path: 'routine', component: RoutineComponent },
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    CarouselModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [RoutineService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
