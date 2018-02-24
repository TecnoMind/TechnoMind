import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./home.routes";
import {HomeComponent} from "./component/src/home.component";
import {BeginComponent} from "./component/src/begin.component";
import { ParticlesModule } from 'angular-particle';

import {HeaderComponent} from "./component/src/header.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        ParticlesModule,
        NgbTypeaheadModule.forRoot(),
        routing
    ],
    declarations: [
       HomeComponent,
       BeginComponent,
       HeaderComponent
    ],
    entryComponents: [

    ],
    bootstrap: [HomeComponent],

    providers: [
    ]

})
export class AppModule { }
