import { Directive, ElementRef, Input, NgModule, NgZone, Renderer2 } from '@angular/core';
import { ScrollView } from 'ionic-angular/util/scroll-view';
import { App, DomController, Platform } from 'ionic-angular';

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
    /** @nocollapse */
    HideFabOnscrollModule.ctorParameters = function () { return []; };
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
/**
 * Generated bundle index. Do not edit.
 */

export { HideFabOnscrollDirective, HideFabOnscrollModule };
