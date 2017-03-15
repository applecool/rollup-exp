import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Home } from "./home.component";
import { Routes, RouterModule } from "@angular/router";


const HOME_ROUTES: Routes = [
    { path: '', component: Home }
];

const homeRouting = RouterModule.forChild(HOME_ROUTES);
@NgModule({
    declarations: [Home],
    imports: [CommonModule, homeRouting]
})
export class HomeModule {

}