import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./component/src/home.component"

/**
 * Created by Eduardo Escalona on 10/10/16.
 */
// Route config let's you map routes to components
const routes: Routes = [
    // map '/home' to the home screen
    { path: 'home',component: HomeComponent}
];

export const routing = RouterModule.forRoot(routes);
