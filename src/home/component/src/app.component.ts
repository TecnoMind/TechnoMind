import {Component} from "@angular/core";


@Component({
    selector: 'my-app',
    template: require('../template/app.component.html'),
})
export class AppComponent {
    public getRouterOutletState(outlet: any) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
}
