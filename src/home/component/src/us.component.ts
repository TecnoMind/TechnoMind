import {Component} from "@angular/core";
import {trigger, transition, animate, state, style,keyframes} from "@angular/animations";

@Component({
    selector: 'us',
    template: require('../template/us.component.html'),
    animations: [

        trigger('labelIn', [
            transition('inactive => active', animate('1000ms ease-in')),
        ]),
    ]
})

export class UsComponent {

}