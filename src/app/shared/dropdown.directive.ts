import {
    Directive,
    Renderer2,
    ElementRef, HostListener, HostBinding
} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private renderer: Renderer2,
                private elRef: ElementRef){
    }

    @HostListener('click') toggleOpen(eventData: Event){
        this.isOpen = !this.isOpen;
    }
}