/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, NgZone } from "@angular/core";
import { ScrollView } from "ionic-angular/util/scroll-view";
import { Platform, App, DomController, Content } from "ionic-angular";
export class HideFabOnscrollDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} zone
     * @param {?} plt
     * @param {?} domCtrl
     * @param {?} app
     */
    constructor(el, renderer, zone, plt, domCtrl, app) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.plt = plt;
        this.domCtrl = domCtrl;
        this.app = app;
        this.TOP_THRESHOLD = 56;
        this.BOTTOM_THRESHOLD = 10;
        this.TRANSITION_DELAY = "500ms";
        this.scrollDir = null;
        this.scrollTop = 0;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //After initializing all the elements , set their transiotn property
        this.initFab();
        // TODO: init the scroll view and enable scroll events
        //then bind the function onScroll
        this.scroll = new ScrollView(this.app, this.plt, this.domCtrl);
        this.scroll.enableEvents();
        this.zone.runOutsideAngular(() => {
            this.scroll.init(this.content.getScrollElement(), this.content._cTop, this.content._cBottom);
            this.scroll.onScroll = ev => {
                this.scrollDir = ev.directionY;
                this.scrollTop = ev.scrollTop;
            };
            this.scroll.onScrollStart = ev => {
                this.render(null);
            };
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scroll && this.scroll.destroy();
    }
    /**
     * @param {?} ts
     * @return {?}
     */
    render(ts) {
        let /** @type {?} */ rAFInt = this.plt.raf(ts => this.render(ts));
        if (this.scroll.isScrolling) {
            this.hideFab(ts);
        }
        else {
            this.plt.cancelRaf(rAFInt);
        }
    }
    /**
     * @param {?} timestamp
     * @return {?}
     */
    hideFab(timestamp) {
        // GOING UP
        if (this.scrollDir == "up" && this.scrollTop > this.BOTTOM_THRESHOLD) {
            this.renderer.setStyle(this.fab, "opacity", "1");
            this.renderer.setStyle(this.fab, this.plt.Css.transform, "scale3d(1,1,1)");
            // GOING DOWN
        }
        else if (this.scrollDir == "down" && this.scrollTop > this.TOP_THRESHOLD) {
            this.renderer.setStyle(this.fab, this.plt.Css.transform, "scale3d(.1,.1,.1)");
            this.renderer.setStyle(this.fab, "opacity", "0");
        }
    }
    /**
     * @return {?}
     */
    initFab() {
        this.fab = this.el.nativeElement;
        this.renderer.setStyle(this.fab, this.plt.Css.transition, `transform ${this.TRANSITION_DELAY}, opacity ${this.TRANSITION_DELAY}`);
    }
}
HideFabOnscrollDirective.decorators = [
    { type: Directive, args: [{
                selector: "[hideFabOnscroll]"
            },] },
];
/** @nocollapse */
HideFabOnscrollDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: NgZone, },
    { type: Platform, },
    { type: DomController, },
    { type: App, },
];
HideFabOnscrollDirective.propDecorators = {
    "content": [{ type: Input, args: ["hideFabOnscroll",] },],
};
function HideFabOnscrollDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HideFabOnscrollDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HideFabOnscrollDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HideFabOnscrollDirective.propDecorators;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.TOP_THRESHOLD;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.BOTTOM_THRESHOLD;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.TRANSITION_DELAY;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.scroll;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.scrollDir;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.scrollTop;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.content;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.fab;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.el;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.renderer;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.zone;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.plt;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.domCtrl;
    /** @type {?} */
    HideFabOnscrollDirective.prototype.app;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1mYWItb25zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtaGlkZS1mYWItb25zY3JvbGwvIiwic291cmNlcyI6WyJoaWRlLWZhYi1vbnNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3RFLE1BQU07Ozs7Ozs7OztJQWlCSixZQUNVLElBQ0EsVUFFQSxNQUNELEtBQ0MsU0FDQTtRQU5BLE9BQUUsR0FBRixFQUFFO1FBQ0YsYUFBUSxHQUFSLFFBQVE7UUFFUixTQUFJLEdBQUosSUFBSTtRQUNMLFFBQUcsR0FBSCxHQUFHO1FBQ0YsWUFBTyxHQUFQLE9BQU87UUFDUCxRQUFHLEdBQUgsR0FBRzs2QkF0QlcsRUFBRTtnQ0FDQyxFQUFFO2dDQUNGLE9BQU87eUJBS2QsSUFBSTt5QkFDSixDQUFDO0tBZWpCOzs7O0lBRUosZUFBZTs7UUFFYixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7OztRQUdmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JB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dCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE5nWm9uZVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwiaW9uaWMtYW5ndWxhci91dGlsL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtLCBBcHAsIERvbUNvbnRyb2xsZXIsIENvbnRlbnQgfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2hpZGVGYWJPbnNjcm9sbF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZUZhYk9uc2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvL1RPRE86Y29uc3RhbnRzXHJcbiAgcHJpdmF0ZSBUT1BfVEhSRVNIT0xEID0gNTY7XHJcbiAgcHJpdmF0ZSBCT1RUT01fVEhSRVNIT0xEID0gMTA7XHJcbiAgcHJpdmF0ZSBUUkFOU0lUSU9OX0RFTEFZID0gXCI1MDBtc1wiO1xyXG4gIC8vVE9ETzogc2Nyb2xsIHZpZXcgZnJvbSB0aGUgaW9uaWMgaXRzZWxmIGZvciBzY3JvbGwgZXZlbnRzXHJcbiAgcHJpdmF0ZSBzY3JvbGw6IFNjcm9sbFZpZXc7XHJcblxyXG4gIC8vIHJlbmRlciB2YXJzIHNvIHdlIGFyZW4ndCBzY29waW5nIG5ldyBvbmVzIGVhY2ggdGltZVxyXG4gIHByaXZhdGUgc2Nyb2xsRGlyID0gbnVsbDtcclxuICBwcml2YXRlIHNjcm9sbFRvcCA9IDA7XHJcblxyXG4gIC8vQ29udGVudCB3aGVyZSB0aGUgZmFiIGJ1dHRvbiBpcyBkaXNwbGF5ZWRcclxuICBASW5wdXQoXCJoaWRlRmFiT25zY3JvbGxcIikgY29udGVudDogQ29udGVudDtcclxuICAvLyBPdXIgZmFiIHRvIGhpZGVcclxuICBmYWI6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAvLyBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgcHVibGljIHBsdDogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGRvbUN0cmw6IERvbUNvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIGFwcDogQXBwXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvL0FmdGVyIGluaXRpYWxpemluZyBhbGwgdGhlIGVsZW1lbnRzICwgc2V0IHRoZWlyIHRyYW5zaW90biBwcm9wZXJ0eVxyXG4gICAgdGhpcy5pbml0RmFiKCk7XHJcbiAgICAvLyBUT0RPOiBpbml0IHRoZSBzY3JvbGwgdmlldyBhbmQgZW5hYmxlIHNjcm9sbCBldmVudHNcclxuICAgIC8vdGhlbiBiaW5kIHRoZSBmdW5jdGlvbiBvblNjcm9sbFxyXG4gICAgdGhpcy5zY3JvbGwgPSBuZXcgU2Nyb2xsVmlldyh0aGlzLmFwcCwgdGhpcy5wbHQsIHRoaXMuZG9tQ3RybCk7XHJcbiAgICB0aGlzLnNjcm9sbC5lbmFibGVFdmVudHMoKTtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmluaXQoXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKSxcclxuICAgICAgICB0aGlzLmNvbnRlbnQuX2NUb3AsXHJcbiAgICAgICAgdGhpcy5jb250ZW50Ll9jQm90dG9tXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLm9uU2Nyb2xsID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlyID0gZXYuZGlyZWN0aW9uWTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IGV2LnNjcm9sbFRvcDtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zY3JvbGwub25TY3JvbGxTdGFydCA9IGV2ID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcihudWxsKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNjcm9sbCAmJiB0aGlzLnNjcm9sbC5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodHMpIHtcclxuICAgIGxldCByQUZJbnQgPSB0aGlzLnBsdC5yYWYodHMgPT4gdGhpcy5yZW5kZXIodHMpKTtcclxuICAgIGlmICh0aGlzLnNjcm9sbC5pc1Njcm9sbGluZykge1xyXG4gICAgICB0aGlzLmhpZGVGYWIodHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wbHQuY2FuY2VsUmFmKHJBRkludCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhpZGVGYWIodGltZXN0YW1wKSB7XHJcbiAgICAvLyBHT0lORyBVUFxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsRGlyID09IFwidXBcIiAmJiB0aGlzLnNjcm9sbFRvcCA+IHRoaXMuQk9UVE9NX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLCBcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLCB0aGlzLnBsdC5Dc3MudHJhbnNmb3JtLCBcInNjYWxlM2QoMSwxLDEpXCIpO1xyXG4gICAgICAvLyBHT0lORyBET1dOXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsRGlyID09IFwiZG93blwiICYmIHRoaXMuc2Nyb2xsVG9wPnRoaXMuVE9QX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLHRoaXMucGx0LkNzcy50cmFuc2Zvcm0sIFwic2NhbGUzZCguMSwuMSwuMSlcIik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mYWIsIFwib3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGluaXRGYWIoKSB7XHJcbiAgICB0aGlzLmZhYiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmZhYixcclxuICAgICAgdGhpcy5wbHQuQ3NzLnRyYW5zaXRpb24sXHJcbiAgICAgIGB0cmFuc2Zvcm0gJHt0aGlzLlRSQU5TSVRJT05fREVMQVl9LCBvcGFjaXR5ICR7dGhpcy5UUkFOU0lUSU9OX0RFTEFZfWApO1xyXG4gIH1cclxufVxyXG4iXX0=