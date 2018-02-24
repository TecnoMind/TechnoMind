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
            color: ['#DA0463', '#404B69', '#DBEDF3'],
            connectParticles: true
        });
    }

}
