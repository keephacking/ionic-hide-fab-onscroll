import { Directive, ElementRef, Input, Renderer2, NgZone, NgModule } from '@angular/core';
import { ScrollView } from 'ionic-angular/util/scroll-view';
import { Platform, App, DomController } from 'ionic-angular';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HideFabOnscrollDirective = /** @class */ (function () {
    function HideFabOnscrollDirective(el, renderer, zone, plt, domCtrl, app) {
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
    HideFabOnscrollDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //After initializing all the elements , set their transiotn property
        this.initFab();
        // TODO: init the scroll view and enable scroll events
        //then bind the function onScroll
        this.scroll = new ScrollView(this.app, this.plt, this.domCtrl);
        this.scroll.enableEvents();
        this.zone.runOutsideAngular(function () {
            _this.scroll.init(_this.content.getScrollElement(), _this.content._cTop, _this.content._cBottom);
            _this.scroll.onScroll = function (ev) {
                _this.scrollDir = ev.directionY;
                _this.scrollTop = ev.scrollTop;
            };
            _this.scroll.onScrollStart = function (ev) {
                _this.render(null);
            };
        });
    };
    /**
     * @return {?}
     */
    HideFabOnscrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scroll && this.scroll.destroy();
    };
    /**
     * @param {?} ts
     * @return {?}
     */
    HideFabOnscrollDirective.prototype.render = /**
     * @param {?} ts
     * @return {?}
     */
    function (ts) {
        var _this = this;
        var /** @type {?} */ rAFInt = this.plt.raf(function (ts) { return _this.render(ts); });
        if (this.scroll.isScrolling) {
            this.hideFab(ts);
        }
        else {
            this.plt.cancelRaf(rAFInt);
        }
    };
    /**
     * @param {?} timestamp
     * @return {?}
     */
    HideFabOnscrollDirective.prototype.hideFab = /**
     * @param {?} timestamp
     * @return {?}
     */
    function (timestamp) {
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
    };
    /**
     * @return {?}
     */
    HideFabOnscrollDirective.prototype.initFab = /**
     * @return {?}
     */
    function () {
        this.fab = this.el.nativeElement;
        this.renderer.setStyle(this.fab, this.plt.Css.transition, "transform " + this.TRANSITION_DELAY + ", opacity " + this.TRANSITION_DELAY);
    };
    HideFabOnscrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[hideFabOnscroll]"
                },] },
    ];
    /** @nocollapse */
    HideFabOnscrollDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: NgZone, },
        { type: Platform, },
        { type: DomController, },
        { type: App, },
    ]; };
    HideFabOnscrollDirective.propDecorators = {
        "content": [{ type: Input, args: ["hideFabOnscroll",] },],
    };
    return HideFabOnscrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HideFabOnscrollModule = /** @class */ (function () {
    function HideFabOnscrollModule() {
    }
    HideFabOnscrollModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HideFabOnscrollDirective
                    ],
                    exports: [
                        HideFabOnscrollDirective
                    ]
                },] },
    ];
    return HideFabOnscrollModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HideFabOnscrollDirective, HideFabOnscrollModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtaGlkZS1mYWItb25zY3JvbGwuanMubWFwIiwic291cmNlcyI6WyJuZzovL2lvbmljLWhpZGUtZmFiLW9uc2Nyb2xsL2hpZGUtZmFiLW9uc2Nyb2xsLmRpcmVjdGl2ZS50cyIsIm5nOi8vaW9uaWMtaGlkZS1mYWItb25zY3JvbGwvaGlkZS1mYWItb25zY3JvbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE5nWm9uZVxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwiaW9uaWMtYW5ndWxhci91dGlsL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7IFBsYXRmb3JtLCBBcHAsIERvbUNvbnRyb2xsZXIsIENvbnRlbnQgfSBmcm9tIFwiaW9uaWMtYW5ndWxhclwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2hpZGVGYWJPbnNjcm9sbF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZUZhYk9uc2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvL1RPRE86Y29uc3RhbnRzXHJcbiAgcHJpdmF0ZSBUT1BfVEhSRVNIT0xEID0gNTY7XHJcbiAgcHJpdmF0ZSBCT1RUT01fVEhSRVNIT0xEID0gMTA7XHJcbiAgcHJpdmF0ZSBUUkFOU0lUSU9OX0RFTEFZID0gXCI1MDBtc1wiO1xyXG4gIC8vVE9ETzogc2Nyb2xsIHZpZXcgZnJvbSB0aGUgaW9uaWMgaXRzZWxmIGZvciBzY3JvbGwgZXZlbnRzXHJcbiAgcHJpdmF0ZSBzY3JvbGw6IFNjcm9sbFZpZXc7XHJcblxyXG4gIC8vIHJlbmRlciB2YXJzIHNvIHdlIGFyZW4ndCBzY29waW5nIG5ldyBvbmVzIGVhY2ggdGltZVxyXG4gIHByaXZhdGUgc2Nyb2xsRGlyID0gbnVsbDtcclxuICBwcml2YXRlIHNjcm9sbFRvcCA9IDA7XHJcblxyXG4gIC8vQ29udGVudCB3aGVyZSB0aGUgZmFiIGJ1dHRvbiBpcyBkaXNwbGF5ZWRcclxuICBASW5wdXQoXCJoaWRlRmFiT25zY3JvbGxcIikgY29udGVudDogQ29udGVudDtcclxuICAvLyBPdXIgZmFiIHRvIGhpZGVcclxuICBmYWI6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAvLyBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICAgcHVibGljIHBsdDogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGRvbUN0cmw6IERvbUNvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIGFwcDogQXBwXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvL0FmdGVyIGluaXRpYWxpemluZyBhbGwgdGhlIGVsZW1lbnRzICwgc2V0IHRoZWlyIHRyYW5zaW90biBwcm9wZXJ0eVxyXG4gICAgdGhpcy5pbml0RmFiKCk7XHJcbiAgICAvLyBUT0RPOiBpbml0IHRoZSBzY3JvbGwgdmlldyBhbmQgZW5hYmxlIHNjcm9sbCBldmVudHNcclxuICAgIC8vdGhlbiBiaW5kIHRoZSBmdW5jdGlvbiBvblNjcm9sbFxyXG4gICAgdGhpcy5zY3JvbGwgPSBuZXcgU2Nyb2xsVmlldyh0aGlzLmFwcCwgdGhpcy5wbHQsIHRoaXMuZG9tQ3RybCk7XHJcbiAgICB0aGlzLnNjcm9sbC5lbmFibGVFdmVudHMoKTtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmluaXQoXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmdldFNjcm9sbEVsZW1lbnQoKSxcclxuICAgICAgICB0aGlzLmNvbnRlbnQuX2NUb3AsXHJcbiAgICAgICAgdGhpcy5jb250ZW50Ll9jQm90dG9tXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLm9uU2Nyb2xsID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlyID0gZXYuZGlyZWN0aW9uWTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IGV2LnNjcm9sbFRvcDtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zY3JvbGwub25TY3JvbGxTdGFydCA9IGV2ID0+IHtcclxuICAgICAgICB0aGlzLnJlbmRlcihudWxsKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNjcm9sbCAmJiB0aGlzLnNjcm9sbC5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodHMpIHtcclxuICAgIGxldCByQUZJbnQgPSB0aGlzLnBsdC5yYWYodHMgPT4gdGhpcy5yZW5kZXIodHMpKTtcclxuICAgIGlmICh0aGlzLnNjcm9sbC5pc1Njcm9sbGluZykge1xyXG4gICAgICB0aGlzLmhpZGVGYWIodHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wbHQuY2FuY2VsUmFmKHJBRkludCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhpZGVGYWIodGltZXN0YW1wKSB7XHJcbiAgICAvLyBHT0lORyBVUFxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsRGlyID09IFwidXBcIiAmJiB0aGlzLnNjcm9sbFRvcCA+IHRoaXMuQk9UVE9NX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLCBcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLCB0aGlzLnBsdC5Dc3MudHJhbnNmb3JtLCBcInNjYWxlM2QoMSwxLDEpXCIpO1xyXG4gICAgICAvLyBHT0lORyBET1dOXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsRGlyID09IFwiZG93blwiICYmIHRoaXMuc2Nyb2xsVG9wPnRoaXMuVE9QX1RIUkVTSE9MRCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLHRoaXMucGx0LkNzcy50cmFuc2Zvcm0sIFwic2NhbGUzZCguMSwuMSwuMSlcIik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mYWIsIFwib3BhY2l0eVwiLCBcIjBcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGluaXRGYWIoKSB7XHJcbiAgICB0aGlzLmZhYiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLmZhYixcclxuICAgICAgdGhpcy5wbHQuQ3NzLnRyYW5zaXRpb24sXHJcbiAgICAgIGB0cmFuc2Zvcm0gJHt0aGlzLlRSQU5TSVRJT05fREVMQVl9LCBvcGFjaXR5ICR7dGhpcy5UUkFOU0lUSU9OX0RFTEFZfWApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge05nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhpZGVGYWJPbnNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vaGlkZS1mYWItb25zY3JvbGwuZGlyZWN0aXZlJztcclxuZXhwb3J0ICogZnJvbSBcIi4vaGlkZS1mYWItb25zY3JvbGwuZGlyZWN0aXZlXCI7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIaWRlRmFiT25zY3JvbGxEaXJlY3RpdmVcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgSGlkZUZhYk9uc2Nyb2xsRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlkZUZhYk9uc2Nyb2xsTW9kdWxl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