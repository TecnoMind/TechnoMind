import {Component, ElementRef, group, HostListener, OnInit} from "@angular/core";
import {trigger, transition, animate, state, style, keyframes, query} from "@angular/animations";

@Component({
    selector: 'us',
    template: require('../template/us.component.html'),
    animations:[
        trigger('scrollAnimation', [
            state('show', style({
                opacity: 1,
                transform: "translateY(100%)"
            })),
            state('hide',   style({
                opacity: 0,
                transform: "translateY(-100%)"
            })),
            transition('show => hide', animate('700ms ease-out')),
            transition('hide => show', animate('700ms ease-in'))
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