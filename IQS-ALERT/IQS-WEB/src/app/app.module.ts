import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from './Login/login.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
