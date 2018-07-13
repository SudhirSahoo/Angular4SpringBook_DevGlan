import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'login-component',
    templateUrl: '../Login/login.component.html',
  })

export class LoginComponent  implements OnInit {
    constructor(
            private http: Http
        ) { }

        ngOnInit(): void {
        }
}