import {Component, OnInit} from "@angular/core";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../css/main.scss"
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {trigger, transition, animate, state, style,keyframes} from "@angular/animations";

@Component({
    selector: 'my-app',
    template: require('../template/home.component.html'),
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({opacity:0}),
                animate(500, style({opacity:1}))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(500, style({opacity:0}))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {
    private loading:boolean = false;

    constructor(private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit(): void {
        this.spinnerService.show();
        setTimeout(()=> {
            this.spinnerService.hide();
            setTimeout(()=> {
                this.loading=true;
            }, 100);
        }, 4000);
    }

}
