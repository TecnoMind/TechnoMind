import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {routing} from "./home.routes";
import {HomeComponent} from "./component/src/home.component";
import {BeginComponent} from "./component/src/begin.component";
import {HeaderComponent} from "./component/src/header.component";
import {UsComponent} from "./component/src/us.component";
import {ParallaxComponent} from "./component/src/parallax.component";
import {TechnologiesComponent} from "./component/src/technologies.component";
import {ContactComponent} from "./component/src/contact.component";
import {FooterComponent} from "./component/src/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        HttpClientModule,
        AngularSvgIconModule,
        routing
    ],
    declarations: [
       HomeComponent,
       BeginComponent,
       HeaderComponent,
       UsComponent,
       ParallaxComponent,
       TechnologiesComponent,
       ContactComponent,
       FooterComponent

    ],
    entryComponents: [

    ],
    bootstrap: [HomeComponent],

    providers: [
    ]

})
export class AppModule { }
