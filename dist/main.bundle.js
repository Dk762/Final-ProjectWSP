webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#card{ }"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<app-topslider></app-topslider>\r\n<div class=\"container\">\r\n    <app-messages></app-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var carousel_1 = __webpack_require__("./node_modules/ng-bootstrap/carousel/index.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var routine_component_1 = __webpack_require__("./src/app/routine/routine.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var routine_service_1 = __webpack_require__("./src/app/services/routine.service.ts");
var topslider_component_1 = __webpack_require__("./src/app/topslider/topslider.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                home_component_1.HomeComponent,
                routine_component_1.RoutineComponent,
                login_component_1.LoginComponent,
                topslider_component_1.TopsliderComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'routine', component: routine_component_1.RoutineComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ]),
                carousel_1.CarouselModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            providers: [routine_service_1.RoutineService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#card{ }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n    <div class=\"text-center\">  \r\n      <h1 class=\"display-4\">Fitbit Fitness Tracker</h1>\r\n      <p class=\"lead\">Take care of your fitness is our main Motto.</p>\r\n    </div>  \r\n    </div>\r\n  </div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <div class=\"card\" >\r\n      <div class=\"card-header\">\r\n        <b>Nutrition</b>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"card\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <img class=\"card-img-top\" src=\"https://oneclassblog.com/wp-content/uploads/2018/03/ThinkstockPhotos-589415708.jpg\" alt=\"Card image cap\" style=\"height: 200px;\">\r\n      <div class=\"card-body\"style=\"height:250px\">\r\n        <h5 class=\"card-title\">Nutrition</h5>\r\n        <p class =\"card-text\" >Nutrition, nourishment, or aliment, is the supply of materials food required by organisms and cells to stay alive. In science and human medicine, nutrition is the science of consuming and utilizing foods.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <b>Gym Wrkout</b>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"card\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <img class=\"card-img-top\" src=\"http://www.kaylainthecity.com/wp-content/uploads/gym.jpg\" alt=\"Card image cap\"style=\"height: 200px;\">\r\n      <div class=\"card-body\"style=\"height:250px\">\r\n        <h5 class=\"card-title\">Gym Workout</h5>\r\n        <p class=\"card-text\">A gymnasium, also known as a gym, is an open air or covered location for gymnastics, athletics, and gymnastic services</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <b>Yoga</b>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"card\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <img class=\"card-img-top\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHW2LwhO1GjM3a_VES4S1sLPKejDSe6q8QJQaGFExrAOqK2NQM5g\" alt=\"Card image cap\"style=\"height: 200px;\">\r\n      <div class=\"card-body\" style=\"height:250px\">\r\n        <h5 class=\"card-title\">Yoga</h5>\r\n        <p class=\"card-text\">Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism..</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\" >\n      <div class=\"col-md-6\">\n          \n          <div class=\"card\" >\n              <div class=\"card-header\"> Login </div>\n              <div class=\"card-body\">\n                  <div class=\"row\" >\n                      <div class=\"col\">\n                          <button class=\"btn btn-block border-success bg-light\" (click)=\"fblogin()\"  >Login with Facebook</button>\n                          <button class=\"btn btn-block border-success bg-light\" (click)=\"googlelogin()\" >Login with Google</button>\n                      </div>\n                      <div class=\"col\">\n                            <input #Name placeholder=\"User Name\" />\n                            <input #Password placeholder=\"Password\" />\n\n                            <button (click)=\"login(Name.value, Password.value)\" >Login</button>\n                      </div>\n                  </div>\n                  \n              </div>\n          </div>\n     </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var routine_service_1 = __webpack_require__("./src/app/services/routine.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Routine) {
        this._Routine = _Routine;
        window.fbAsyncInit = function () {
            FB.init({
                appId: '1267942203349903',
                cookie: true,
                xfbml: true,
                version: 'v2.12'
            });
            FB.AppEvents.logPageView();
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (Name, Password) {
        this._Routine.login(Name, Password);
    };
    LoginComponent.prototype.googlelogin = function () {
        var _this = this;
        googleyolo.hint({
            supportedAuthMethods: [
                "https://accounts.google.com"
            ],
            supportedIdTokenProviders: [
                {
                    uri: "https://accounts.google.com",
                    clientId: "1004007759163-e9s4orbn6dq588geu46tk9dlh5sggr6b.apps.googleusercontent.com "
                }
            ]
        }).then(function (credentials) {
            _this._Routine.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
            console.log(credentials);
        });
    };
    LoginComponent.prototype.fblogin = function () {
        FB.login(function (credentials) {
            console.log(credentials);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [routine_service_1.RoutineService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages { padding-top: .5rem }"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"messages\">\r\n  <div class=\"alert alert-success\">\r\n      {{Messages[0]}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.Messages = ['Welcome to fitness Tracker.'];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/models/fitness.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fitness = /** @class */ (function () {
    function Fitness() {
        this.CompletedTask = [];
    }
    return Fitness;
}());
exports.Fitness = Fitness;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Routine = /** @class */ (function () {
    function Routine() {
        this.Chosen = false;
    }
    return Routine;
}());
exports.Routine = Routine;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "#navbar{ background-color: rgb(81, 238, 89)}\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      Fitbit tracker\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-between\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/routine\" routerLinkActive=\"active\">Routine</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-text\" *ngIf=\"Routine.Me\">\r\n            <img [src]=\"Routine.pic\" style=\"height: 24px;\" />\r\n            {{Routine.Me.Name}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var routine_service_1 = __webpack_require__("./src/app/services/routine.service.ts");
var NavComponent = /** @class */ (function () {
    function NavComponent(Routine) {
        this.Routine = Routine;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [routine_service_1.RoutineService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/routine/routine.component.css":
/***/ (function(module, exports) {

module.exports = "routine {\r\n    cursor: not-allowed;\r\n}\r\nroutine.enabled {\r\n    cursor: pointer;\r\n}\r\nroutine .enabled:hover {\r\n    background-color: aquamarine;\r\n}"

/***/ }),

/***/ "./src/app/routine/routine.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card bg-dark\">\r\n      <div class=\"card-header text-white\">Tasks</div>\r\n      <ul class=\"list-group list-group-flush routine\">\r\n        <li *ngFor=\"let routine of Me.Routines\" \r\n            (click)=\"selectTask($event, routine)\"\r\n            [ngClass]=\"{ enabled: !MyChosenTask() }\"\r\n            class=\"list-group-item \" >\r\n            {{routine}}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list-group col-md-8\">\r\n    <div class=\"card bg-warning\">\r\n      <div class=\"card-header text-white\">\r\n        Chosen Task\r\n      </div>\r\n      <ul class=\"list-group list-group-flush \">\r\n        <li *ngFor=\"let routine of Model.ChosenTask\"\r\n            class=\"list-group-item d-flex justify-content-between align-items-center\">\r\n            {{routine.Task}}\r\n            <span  class=\"badge badge-primary\">{{routine.UserName}}</span>\r\n            \r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <img class=\"card-img\" *ngIf=\"Model.Picture\" [src]=\"Model.Picture.url\" />\r\n        <div class=\"card-img-overlay\" style=\"text-align: center\">\r\n            <button class=\"btn btn-success btn-lg\" (click)=\"flipPicture($event)\"> Flip  the Picture </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card bg-info\">\r\n      <div class=\"card-header\">Users</div>\r\n      <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let user of Model.Users\" class=\"list-group-item\">\r\n            <img style=\"height: 16px; width: 16px\" class=\"rounded\">\r\n            {{user.Name}}\r\n          </li>\r\n      </ul>\r\n     </div> \r\n  </div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"card bg-success\">\r\n      <div class=\"card-header\">Completed Task</div>\r\n      <ul class=\"list-group list-group-flush\">\r\n          <li *ngFor=\"let routine of Model.Completed\" class=\"list-group-item\">\r\n              {{routine.UserName}} : {{routine.Task}}\r\n          </li>\r\n      </ul>\r\n     </div> \r\n  </div>\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/routine/routine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fitness_1 = __webpack_require__("./src/app/models/fitness.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var routine_service_1 = __webpack_require__("./src/app/services/routine.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var RoutineComponent = /** @class */ (function () {
    function RoutineComponent(http, _Routine, _Router) {
        var _this = this;
        this.http = http;
        this._Routine = _Routine;
        this._Router = _Router;
        this.Model = new fitness_1.Fitness();
        this.Me = new fitness_1.User();
        this._api = "http://localhost:8080/fitness";
        this.MyChosenTask = function () { return _this.Model.ChosenTask.find(function (x) { return x.UserName == _this.Me.Name; }); };
        this.ChosenTask = function () { return _this.Model.ChosenTask.find(function (x) { return x.Chosen; }); };
        this.Me.Name = "Dhaval";
        http.get(this._api + "/routines", { params: { userName: this.Me.Name } }).subscribe(function (data) { return _this.Me.Routines = data.json(); });
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    RoutineComponent.prototype.ngOnInit = function () {
    };
    RoutineComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    RoutineComponent.prototype.flipPicture = function (e) {
        this.http.post(this._api + "/picture", {})
            .subscribe();
    };
    RoutineComponent.prototype.selectTask = function (e, text) {
        var _this = this;
        e.preventDefault();
        if (this.MyChosenTask())
            return;
        this.http.post(this._api + "/routines", { Task: text, UserName: this.Me.Name })
            .subscribe(function (data) {
            if (data.json().success) {
                _this.Me.Routines.splice(_this.Me.Routines.indexOf(text), 1);
            }
        });
    };
    RoutineComponent = __decorate([
        core_1.Component({
            selector: 'app-routine',
            template: __webpack_require__("./src/app/routine/routine.component.html"),
            styles: [__webpack_require__("./src/app/routine/routine.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            routine_service_1.RoutineService,
            router_1.Router])
    ], RoutineComponent);
    return RoutineComponent;
}());
exports.RoutineComponent = RoutineComponent;


/***/ }),

/***/ "./src/app/services/routine.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RoutineService = /** @class */ (function () {
    function RoutineService(http, _Router) {
        this.http = http;
        this._Router = _Router;
    }
    RoutineService.prototype.login = function (Name, Password) {
        if (Password == '123') {
            //this.Me = { Name: name };
            this._Router.navigate(['/routine']);
        }
    };
    RoutineService.prototype.oAuthLogin = function (Name, token, pic) {
        //this.Me = { Name: name}
        this.pic = pic;
        this.token = token;
        this._Router.navigate(['/routine']);
    };
    RoutineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], RoutineService);
    return RoutineService;
}());
exports.RoutineService = RoutineService;


/***/ }),

/***/ "./src/app/topslider/topslider.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topslider/topslider.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"topSlider\" class=\"carousel slide\" data-ride=\"carousel\">\n  <carousel class=\"carousel swiper-slide\">\n    <slide>\n      <img class=\"d-block w-100\" src=\"https://o2fitnessclubs.com/wp-content/uploads/2017/11/O2-Fitness-North-Ridge-Header.jpg\" style=\"height:400px\" alt=\"First slide\">\n    </slide>\n    <slide>\n      <img class=\"d-block w-100\" src=\"http://blackirongymnv.com/wp-content/uploads/2015/07/black-iron-gym-about.png\" style=\"height:400px\" alt=\"First slide\">\n      \n    </slide>\n    <slide>\n      <img class=\"d-block w-100\" src=\"https://o2fitnessclubs.com/wp-content/uploads/2017/08/O2-Fitness-Falconbridge-Header.jpg\" style=\"height:400px\" alt=\"First slide\">\n      \n    </slide>\n  </carousel>\n</div>\n"

/***/ }),

/***/ "./src/app/topslider/topslider.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TopsliderComponent = /** @class */ (function () {
    function TopsliderComponent() {
    }
    TopsliderComponent.prototype.ngOnInit = function () {
    };
    TopsliderComponent = __decorate([
        core_1.Component({
            selector: 'app-topslider',
            template: __webpack_require__("./src/app/topslider/topslider.component.html"),
            styles: [__webpack_require__("./src/app/topslider/topslider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopsliderComponent);
    return TopsliderComponent;
}());
exports.TopsliderComponent = TopsliderComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map