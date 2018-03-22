import {Component, OnInit} from "@angular/core";
import * as Particles from "particlesjs/src/particles";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";
import {Router} from '@angular/router';

@Component({
    selector: 'loading',
    template: require('../template/loading.component.html'),
})
export class LoadingComponent implements OnInit {

    constructor(private spinnerService: Ng4LoadingSpinnerService,private router: Router) {

    }

    ngOnInit() {
        this.spinnerService.show();
        setTimeout(()=> {
            this.spinnerService.hide();
            setTimeout(() => {
                this.router.navigate(['home']);
            },200)
        }, 4000);
        Particles.init
        ({
            selector: '.background',
            color: ['#fbfbfb', '#539eb8', '#fbfbfb'],
            connectParticles: true
        });
    }
}