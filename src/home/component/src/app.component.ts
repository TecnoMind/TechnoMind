import {Component} from "@angular/core";
import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s:any,a :any,o={optional:true})=>q(s,a,o);




@Component({
    selector: 'my-app',
    template: require('../template/app.component.html'),
    animations: [
        trigger('routerAnimation', [
            transition('* <=> *', [
                /* order */
                /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })),
                /* 2 */ query('.block', style({ opacity: 0 })),
                /* 3 */ group([  // block executes in parallel
                            query(':enter', [
                                style({ transform: 'translateX(100%)' }),
                                animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                                style({ transform: 'translateX(0%)' }))
                            ]),
                            query(':leave', [
                                style({ transform: 'translateX(0%)' }),
                                animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                                style({ transform: 'translateX(-100%)' }))
                            ]),
                ]),
                /* 4 */ query(':enter .block', stagger(400, [
                    style({ transform: 'translateY(100px)' }),
                    animate('1s ease-in-out',
                        style({ transform: 'translateY(0px)', opacity: 1 })),
                ])),
            ])
        ])
    ]
})
export class AppComponent {
    public getRouteAnimation(outlet: any) {
        return outlet.isActivated ? outlet.activatedRouteData.animation : '';
    }
}
