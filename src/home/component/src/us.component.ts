import {Component} from "@angular/core";

@Component({
    selector: 'us',
    template: require('../template/us.component.html'),
})

export class UsComponent {
    showSelected: boolean;
    showSelected2: boolean;
    showSelected3: boolean;
    showSelected4: boolean;

    constructor() {
        this.showSelected = true;
        this.showSelected2 = false;
        this.showSelected3 = false;
        this.showSelected4 = false;
    }

    softwareButton() {
        this.showSelected = true;
        this.showSelected2 = false;
        this.showSelected3 = false;
        this.showSelected4 = false;
    }
    consultoryButton() {
        this.showSelected = false;
        this.showSelected2 = true;
        this.showSelected3 = false;
        this.showSelected4 = false;
    }
    mobileButton() {
        this.showSelected = false;
        this.showSelected2 = false;
        this.showSelected3 = true;
        this.showSelected4 = false;
    }
    designButton() {
        this.showSelected = false;
        this.showSelected2 = false;
        this.showSelected3 = false;
        this.showSelected4 = true;
    }

}