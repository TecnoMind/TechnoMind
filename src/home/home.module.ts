import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./home.routes";
import {AppComponent} from "./component/src/app.component";
import {HomeComponent} from "./component/src/home.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent],

    providers: [
    ]

})
export class AppModule { }
