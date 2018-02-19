import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./home.routes";
import {HomeComponent} from "./component/src/home.component";
import {BeginComponent} from "./component/src/begin.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        routing
    ],
    declarations: [
       HomeComponent,
       BeginComponent
    ],
    entryComponents: [

    ],
    bootstrap: [HomeComponent],

    providers: [
    ]

})
export class AppModule { }
