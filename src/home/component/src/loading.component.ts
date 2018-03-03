import {Component, OnInit} from "@angular/core";
import * as Particles from "particlesjs/src/particles";

@Component({
    selector: 'loading',
    template: require('../template/loading.component.html'),
})
export class LoadingComponent implements OnInit {
    ngOnInit() {
        Particles.
        init
        ({
            selector: '.background',
            color: ['#fbfbfb', '#539eb8', '#fbfbfb'],
            connectParticles: true
        });
    }
}
