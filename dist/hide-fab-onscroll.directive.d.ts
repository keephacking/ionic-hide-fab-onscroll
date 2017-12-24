import { ElementRef, Renderer2, AfterViewInit, OnDestroy, NgZone } from "@angular/core";
import { Platform, App, DomController, Content } from "ionic-angular";
export declare class HideFabOnscrollDirective implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private zone;
    plt: Platform;
    private domCtrl;
    private app;
    private TOP_THRESHOLD;
    private BOTTOM_THRESHOLD;
    private TRANSITION_DELAY;
    private scroll;
    private scrollDir;
    private scrollTop;
    content: Content;
    fab: HTMLElement;
    constructor(el: ElementRef, renderer: Renderer2, zone: NgZone, plt: Platform, domCtrl: DomController, app: App);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    render(ts: any): void;
    hideFab(timestamp: any): void;
    initFab(): void;
}
