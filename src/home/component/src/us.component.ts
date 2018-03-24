import {Component, OnInit} from "@angular/core";
import {trigger, transition, animate, state, style,keyframes} from "@angular/animations";

@Component({
    selector: 'us',
    template: require('../template/us.component.html')
})

export class UsComponent implements OnInit{

    private selectedArea: string = "software";


    constructor() {

    }

    public selectArea(newSelected: string) {
        this.selectedArea = newSelected;
    }

    ngOnInit(): void {}
}