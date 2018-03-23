import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {routing} from "./commons.routes";
import {LoadingComponent} from "./component/src/loading.component";
import {AngularSvgIconModule} from "angular-svg-icon";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        Ng4LoadingSpinnerModule.forRoot(),
        AngularSvgIconModule,
        RouterModule.forRoot(
            routing,
            {useHash: true }, // <-- debugging purposes only
        )
    ],
    declarations: [LoadingComponent],
    exports: [
        RouterModule,
        LoadingComponent,
        AngularSvgIconModule,
        BrowserModule,
        FormsModule,
    ]

})
export class CommonsModule { }
