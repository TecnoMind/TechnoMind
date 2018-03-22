import {Component, OnInit} from "@angular/core";
import {trigger, transition, animate, state, style,keyframes} from "@angular/animations";

@Component({
    selector: 'us',
    template: require('../template/us.component.html'),
    animations: [
        trigger('label', [
            state('show', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({transform: 'translateX(-100%)'}),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({transform: 'translateX(100%)'}))
            ])
        ])
    ]
})

export class UsComponent implements OnInit{

    private selectedArea: string = "software";
    private state:string;

    constructor() {

    }

    public selectArea(newSelected: string) {
        this.selectedArea = newSelected;
    }

    ngOnInit(): void {
        setTimeout( ()=> {
           this.state = "show"
        },500);
    }
}