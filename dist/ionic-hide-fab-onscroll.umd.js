(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ionic-angular/util/scroll-view'), require('ionic-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'ionic-angular/util/scroll-view', 'ionic-angular'], factory) :
	(factory((global.ionicHideFabOnscroll = {}),global.core,global.scrollView,global.ionicAngular));
}(this, (function (exports,core,scrollView,ionicAngular) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HideFabOnscrollDirective {
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
        this.scroll = new scrollView.ScrollView(this.app, this.plt, this.domCtrl);
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
    { type: core.Directive, args: [{
                selector: "[hideFabOnscroll]"
            },] },
];
/** @nocollapse */
HideFabOnscrollDirective.ctorParameters = () => [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.NgZone, },
    { type: ionicAngular.Platform, },
    { type: ionicAngular.DomController, },
    { type: ionicAngular.App, },
];
HideFabOnscrollDirective.propDecorators = {
    "content": [{ type: core.Input, args: ["hideFabOnscroll",] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HideFabOnscrollModule {
}
HideFabOnscrollModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    HideFabOnscrollDirective
                ],
                exports: [
                    HideFabOnscrollDirective
                ]
            },] },
];
/** @nocollapse */
HideFabOnscrollModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.HideFabOnscrollModule = HideFabOnscrollModule;
exports.HideFabOnscrollDirective = HideFabOnscrollDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
