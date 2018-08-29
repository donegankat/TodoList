import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ServerRequest } from '../services/index';
import { AppSettings } from '../settings/appsettings'

import {
  TodoListComponent
} from '../components/index';

@NgModule({
  declarations: [
    AppComponent,

    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppSettings,
    ServerRequest
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
