import {Component, ElementRef, group, HostListener, OnInit} from "@angular/core";
import {trigger, transition, animate, state, style, keyframes, query, stagger} from "@angular/animations";

@Component({
    selector: 'us',
    template: require('../template/us.component.html'),
    animations:[
        trigger('parentAnimation', [
            transition('hide  => show', [
                query('.test', style({
                    opacity:0,
                    transform:'translateY(-100%)'
                })),
                query('.test', stagger('500ms', [
                    animate('100ms .1s ease-out', style({
                        opacity: 1,
                        transform:'translateY(100%)'
                    }))
                ]))
            ]),
        ])]
})

export class UsComponent implements OnInit{

    private selectedArea: string = "software";
    private state:string = 'hide'

    constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    public checkScroll() {
        const componentPosition = this.el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= (componentPosition * .9)) {
            this.state = 'show'
        } else {
            this.state = 'hide'
        }

    }

    public selectArea(newSelected: string) {
        this.selectedArea = newSelected;
    }

    ngOnInit(): void {}
}