import {Component, OnInit} from "@angular/core";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../../css/main.scss"
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@Component({
    selector: 'my-app',
    template: require('../template/home.component.html'),
})
export class HomeComponent implements OnInit {
    private loading:boolean = false;

    constructor(private spinnerService: Ng4LoadingSpinnerService) { }

    ngOnInit(): void {
        this.spinnerService.show();
        setTimeout(()=> {
            this.spinnerService.hide();
            this.loading=true;
        }, 4000);
    }

}
