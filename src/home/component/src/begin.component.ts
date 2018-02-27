import {Component, OnInit} from "@angular/core";
import * as Particles from "../../../../node_modules/particlesjs/src/particles"
@Component({
    selector: 'begin',
    template: require('../template/begin.component.html'),
})
export class BeginComponent implements OnInit{

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
