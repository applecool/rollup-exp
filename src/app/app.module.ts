import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
    { path: 'home', loadChildren: '../home/home.module#HomeModule'}
];

const mainRouting = RouterModule.forRoot(ROUTES);

@NgModule({
  imports:      [ BrowserModule, mainRouting ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
