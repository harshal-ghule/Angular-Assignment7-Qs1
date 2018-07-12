import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';//explicite
import {MatInputModule} from '@angular/material/input';//explicite
import {MatButtonModule, MatCheckboxModule} from '@angular/material';//explict

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, //explicite
    MatInputModule,  //explicite
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
