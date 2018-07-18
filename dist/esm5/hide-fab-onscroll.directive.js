/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, NgZone } from "@angular/core";
import { ScrollView } from "ionic-angular/util/scroll-view";
import { Platform, App, DomController, Content } from "ionic-angular";
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
export { HideFabOnscrollDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS1mYWItb25zY3JvbGwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vaW9uaWMtaGlkZS1mYWItb25zY3JvbGwvIiwic291cmNlcyI6WyJoaWRlLWZhYi1vbnNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXNCcEUsa0NBQ1UsSUFDQSxVQUVBLE1BQ0QsS0FDQyxTQUNBO1FBTkEsT0FBRSxHQUFGLEVBQUU7UUFDRixhQUFRLEdBQVIsUUFBUTtRQUVSLFNBQUksR0FBSixJQUFJO1FBQ0wsUUFBRyxHQUFILEdBQUc7UUFDRixZQUFPLEdBQVAsT0FBTztRQUNQLFFBQUcsR0FBSCxHQUFHOzZCQXRCVyxFQUFFO2dDQUNDLEVBQUU7Z0NBQ0YsT0FBTzt5QkFLZCxJQUFJO3lCQUNKLENBQUM7S0FlakI7Ozs7SUFFSixrREFBZTs7O0lBQWY7UUFBQSxpQkFxQkM7O1FBbkJDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7O1FBR2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixF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LEtBQUssU0FBQyxpQkFBaUI7O21DQTVCMUI7O1NBZWEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgTmdab25lXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldyB9IGZyb20gXCJpb25pYy1hbmd1bGFyL3V0aWwvc2Nyb2xsLXZpZXdcIjtcclxuaW1wb3J0IHsgUGxhdGZvcm0sIEFwcCwgRG9tQ29udHJvbGxlciwgQ29udGVudCB9IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJbaGlkZUZhYk9uc2Nyb2xsXVwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIaWRlRmFiT25zY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vVE9ETzpjb25zdGFudHNcclxuICBwcml2YXRlIFRPUF9USFJFU0hPTEQgPSA1NjtcclxuICBwcml2YXRlIEJPVFRPTV9USFJFU0hPTEQgPSAxMDtcclxuICBwcml2YXRlIFRSQU5TSVRJT05fREVMQVkgPSBcIjUwMG1zXCI7XHJcbiAgLy9UT0RPOiBzY3JvbGwgdmlldyBmcm9tIHRoZSBpb25pYyBpdHNlbGYgZm9yIHNjcm9sbCBldmVudHNcclxuICBwcml2YXRlIHNjcm9sbDogU2Nyb2xsVmlldztcclxuXHJcbiAgLy8gcmVuZGVyIHZhcnMgc28gd2UgYXJlbid0IHNjb3BpbmcgbmV3IG9uZXMgZWFjaCB0aW1lXHJcbiAgcHJpdmF0ZSBzY3JvbGxEaXIgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgLy9Db250ZW50IHdoZXJlIHRoZSBmYWIgYnV0dG9uIGlzIGRpc3BsYXllZFxyXG4gIEBJbnB1dChcImhpZGVGYWJPbnNjcm9sbFwiKSBjb250ZW50OiBDb250ZW50O1xyXG4gIC8vIE91ciBmYWIgdG8gaGlkZVxyXG4gIGZhYjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIC8vIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBwdWJsaWMgcGx0OiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgZG9tQ3RybDogRG9tQ29udHJvbGxlcixcclxuICAgIHByaXZhdGUgYXBwOiBBcHBcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vQWZ0ZXIgaW5pdGlhbGl6aW5nIGFsbCB0aGUgZWxlbWVudHMgLCBzZXQgdGhlaXIgdHJhbnNpb3RuIHByb3BlcnR5XHJcbiAgICB0aGlzLmluaXRGYWIoKTtcclxuICAgIC8vIFRPRE86IGluaXQgdGhlIHNjcm9sbCB2aWV3IGFuZCBlbmFibGUgc2Nyb2xsIGV2ZW50c1xyXG4gICAgLy90aGVuIGJpbmQgdGhlIGZ1bmN0aW9uIG9uU2Nyb2xsXHJcbiAgICB0aGlzLnNjcm9sbCA9IG5ldyBTY3JvbGxWaWV3KHRoaXMuYXBwLCB0aGlzLnBsdCwgdGhpcy5kb21DdHJsKTtcclxuICAgIHRoaXMuc2Nyb2xsLmVuYWJsZUV2ZW50cygpO1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGwuaW5pdChcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZ2V0U2Nyb2xsRWxlbWVudCgpLFxyXG4gICAgICAgIHRoaXMuY29udGVudC5fY1RvcCxcclxuICAgICAgICB0aGlzLmNvbnRlbnQuX2NCb3R0b21cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5zY3JvbGwub25TY3JvbGwgPSBldiA9PiB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxEaXIgPSBldi5kaXJlY3Rpb25ZO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9wID0gZXYuc2Nyb2xsVG9wO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNjcm9sbC5vblNjcm9sbFN0YXJ0ID0gZXYgPT4ge1xyXG4gICAgICAgIHRoaXMucmVuZGVyKG51bGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsICYmIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0cykge1xyXG4gICAgbGV0IHJBRkludCA9IHRoaXMucGx0LnJhZih0cyA9PiB0aGlzLnJlbmRlcih0cykpO1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmlzU2Nyb2xsaW5nKSB7XHJcbiAgICAgIHRoaXMuaGlkZUZhYih0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBsdC5jYW5jZWxSYWYockFGSW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGlkZUZhYih0aW1lc3RhbXApIHtcclxuICAgIC8vIEdPSU5HIFVQXHJcbiAgICBpZiAodGhpcy5zY3JvbGxEaXIgPT0gXCJ1cFwiICYmIHRoaXMuc2Nyb2xsVG9wID4gdGhpcy5CT1RUT01fVEhSRVNIT0xEKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mYWIsIFwib3BhY2l0eVwiLCBcIjFcIik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mYWIsIHRoaXMucGx0LkNzcy50cmFuc2Zvcm0sIFwic2NhbGUzZCgxLDEsMSlcIik7XHJcbiAgICAgIC8vIEdPSU5HIERPV05cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGxEaXIgPT0gXCJkb3duXCIgJiYgdGhpcy5zY3JvbGxUb3A+dGhpcy5UT1BfVEhSRVNIT0xEKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5mYWIsdGhpcy5wbHQuQ3NzLnRyYW5zZm9ybSwgXCJzY2FsZTNkKC4xLC4xLC4xKVwiKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZhYiwgXCJvcGFjaXR5XCIsIFwiMFwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgaW5pdEZhYigpIHtcclxuICAgIHRoaXMuZmFiID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuZmFiLFxyXG4gICAgICB0aGlzLnBsdC5Dc3MudHJhbnNpdGlvbixcclxuICAgICAgYHRyYW5zZm9ybSAke3RoaXMuVFJBTlNJVElPTl9ERUxBWX0sIG9wYWNpdHkgJHt0aGlzLlRSQU5TSVRJT05fREVMQVl9YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==