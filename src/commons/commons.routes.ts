import {Routes} from "@angular/router";

import {HomeComponent} from "../home/component/src/home.component";
import {LoadingComponent} from "./component/src/loading.component";

/**
 * Created by Eduardo Escalona on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    { path: 'home',component: HomeComponent},
    { path: 'loading',component: LoadingComponent},
    { path: '',   redirectTo: '/loading', pathMatch : 'full'},
    { path: '**', redirectTo: '/loading', pathMatch:'full' }

];

export const routing = routes;
