import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/src/home.component";
import {BeginComponent} from "./component/src/begin.component";
import {HeaderComponent} from "./component/src/header.component";
import {UsComponent} from "./component/src/us.component";
import {ParallaxComponent} from "./component/src/parallax.component";
import {TechnologiesComponent} from "./component/src/technologies.component";
import {ContactComponent} from "./component/src/contact.component";
import {FooterComponent} from "./component/src/footer.component";
import {AppComponent} from "./component/src/app.component";
import {CommonsModule} from "../commons/commons.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonsModule,
        HttpClientModule,
    ],
    declarations: [
       HomeComponent,
       BeginComponent,
       HeaderComponent,
       UsComponent,
       ParallaxComponent,
       TechnologiesComponent,
       ContactComponent,
       FooterComponent,
       AppComponent,

    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
