import { Component } from "@angular/core";
import { AppComponent } from "../app/app.component";

@Component({
    template: '<h1>Home here!</h1>',
    providers: [AppComponent]
})
export class Home {
    constructor(private _app:AppComponent){
        _app.sayHello();
    }
}