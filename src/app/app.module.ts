import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SecondComponent } from './second/second.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, SecondComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, SecondComponent]
})
export class AppModule { }
