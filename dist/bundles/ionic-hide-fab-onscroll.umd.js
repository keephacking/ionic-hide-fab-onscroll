(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ionic-angular/util/scroll-view'), require('ionic-angular')) :
    typeof define === 'function' && define.amd ? define('ionic-hide-fab-onscroll', ['exports', '@angular/core', 'ionic-angular/util/scroll-view', 'ionic-angular'], factory) :
    (factory((global['ionic-hide-fab-onscroll'] = {}),global.ng.core,null,null));
}(this, (function (exports,core,scrollView,ionicAngular) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HideFabOnscrollDirective = (function () {
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
                this.scroll = new scrollView.ScrollView(this.app, this.plt, this.domCtrl);
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
            { type: core.Directive, args: [{
                        selector: "[hideFabOnscroll]"
                    },] },
        ];
        /** @nocollapse */
        HideFabOnscrollDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.NgZone, },
                { type: ionicAngular.Platform, },
                { type: ionicAngular.DomController, },
                { type: ionicAngular.App, },
            ];
        };
        HideFabOnscrollDirective.propDecorators = {
            "content": [{ type: core.Input, args: ["hideFabOnscroll",] },],
        };
        return HideFabOnscrollDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HideFabOnscrollModule = (function () {
        function HideFabOnscrollModule() {
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

    exports.HideFabOnscrollDirective = HideFabOnscrollDirective;
    exports.HideFabOnscrollModule = HideFabOnscrollModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtaGlkZS1mYWItb25zY3JvbGwudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9pb25pYy1oaWRlLWZhYi1vbnNjcm9sbC9oaWRlLWZhYi1vbnNjcm9sbC5kaXJlY3RpdmUudHMiLCJuZzovL2lvbmljLWhpZGUtZmFiLW9uc2Nyb2xsL2hpZGUtZmFiLW9uc2Nyb2xsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBOZ1pvbmVcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3IH0gZnJvbSBcImlvbmljLWFuZ3VsYXIvdXRpbC9zY3JvbGwtdmlld1wiO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSwgQXBwLCBEb21Db250cm9sbGVyLCBDb250ZW50IH0gZnJvbSBcImlvbmljLWFuZ3VsYXJcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIltoaWRlRmFiT25zY3JvbGxdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGVGYWJPbnNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLy9UT0RPOmNvbnN0YW50c1xyXG4gIHByaXZhdGUgVE9QX1RIUkVTSE9MRCA9IDU2O1xyXG4gIHByaXZhdGUgQk9UVE9NX1RIUkVTSE9MRCA9IDEwO1xyXG4gIHByaXZhdGUgVFJBTlNJVElPTl9ERUxBWSA9IFwiNTAwbXNcIjtcclxuICAvL1RPRE86IHNjcm9sbCB2aWV3IGZyb20gdGhlIGlvbmljIGl0c2VsZiBmb3Igc2Nyb2xsIGV2ZW50c1xyXG4gIHByaXZhdGUgc2Nyb2xsOiBTY3JvbGxWaWV3O1xyXG5cclxuICAvLyByZW5kZXIgdmFycyBzbyB3ZSBhcmVuJ3Qgc2NvcGluZyBuZXcgb25lcyBlYWNoIHRpbWVcclxuICBwcml2YXRlIHNjcm9sbERpciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzY3JvbGxUb3AgPSAwO1xyXG5cclxuICAvL0NvbnRlbnQgd2hlcmUgdGhlIGZhYiBidXR0b24gaXMgZGlzcGxheWVkXHJcbiAgQElucHV0KFwiaGlkZUZhYk9uc2Nyb2xsXCIpIGNvbnRlbnQ6IENvbnRlbnQ7XHJcbiAgLy8gT3VyIGZhYiB0byBoaWRlXHJcbiAgZmFiOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgLy8gcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICAgIHB1YmxpYyBwbHQ6IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBkb21DdHJsOiBEb21Db250cm9sbGVyLFxyXG4gICAgcHJpdmF0ZSBhcHA6IEFwcFxyXG4gICkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy9BZnRlciBpbml0aWFsaXppbmcgYWxsIHRoZSBlbGVtZW50cyAsIHNldCB0aGVpciB0cmFuc2lvdG4gcHJvcGVydHlcclxuICAgIHRoaXMuaW5pdEZhYigpO1xyXG4gICAgLy8gVE9ETzogaW5pdCB0aGUgc2Nyb2xsIHZpZXcgYW5kIGVuYWJsZSBzY3JvbGwgZXZlbnRzXHJcbiAgICAvL3RoZW4gYmluZCB0aGUgZnVuY3Rpb24gb25TY3JvbGxcclxuICAgIHRoaXMuc2Nyb2xsID0gbmV3IFNjcm9sbFZpZXcodGhpcy5hcHAsIHRoaXMucGx0LCB0aGlzLmRvbUN0cmwpO1xyXG4gICAgdGhpcy5zY3JvbGwuZW5hYmxlRXZlbnRzKCk7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbC5pbml0KFxyXG4gICAgICAgIHRoaXMuY29udGVudC5nZXRTY3JvbGxFbGVtZW50KCksXHJcbiAgICAgICAgdGhpcy5jb250ZW50Ll9jVG9wLFxyXG4gICAgICAgIHRoaXMuY29udGVudC5fY0JvdHRvbVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNjcm9sbC5vblNjcm9sbCA9IGV2ID0+IHtcclxuICAgICAgICB0aGlzLnNjcm9sbERpciA9IGV2LmRpcmVjdGlvblk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBldi5zY3JvbGxUb3A7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2Nyb2xsLm9uU2Nyb2xsU3RhcnQgPSBldiA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIobnVsbCk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zY3JvbGwgJiYgdGhpcy5zY3JvbGwuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRzKSB7XHJcbiAgICBsZXQgckFGSW50ID0gdGhpcy5wbHQucmFmKHRzID0+IHRoaXMucmVuZGVyKHRzKSk7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwuaXNTY3JvbGxpbmcpIHtcclxuICAgICAgdGhpcy5oaWRlRmFiKHRzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucGx0LmNhbmNlbFJhZihyQUZJbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoaWRlRmFiKHRpbWVzdGFtcCkge1xyXG4gICAgLy8gR09JTkcgVVBcclxuICAgIGlmICh0aGlzLnNjcm9sbERpciA9PSBcInVwXCIgJiYgdGhpcy5zY3JvbGxUb3AgPiB0aGlzLkJPVFRPTV9USFJFU0hPTEQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZhYiwgXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZhYiwgdGhpcy5wbHQuQ3NzLnRyYW5zZm9ybSwgXCJzY2FsZTNkKDEsMSwxKVwiKTtcclxuICAgICAgLy8gR09JTkcgRE9XTlxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbERpciA9PSBcImRvd25cIiAmJiB0aGlzLnNjcm9sbFRvcD50aGlzLlRPUF9USFJFU0hPTEQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmZhYix0aGlzLnBsdC5Dc3MudHJhbnNmb3JtLCBcInNjYWxlM2QoLjEsLjEsLjEpXCIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZmFiLCBcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbml0RmFiKCkge1xyXG4gICAgdGhpcy5mYWIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5mYWIsXHJcbiAgICAgIHRoaXMucGx0LkNzcy50cmFuc2l0aW9uLFxyXG4gICAgICBgdHJhbnNmb3JtICR7dGhpcy5UUkFOU0lUSU9OX0RFTEFZfSwgb3BhY2l0eSAke3RoaXMuVFJBTlNJVElPTl9ERUxBWX1gKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIaWRlRmFiT25zY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL2hpZGUtZmFiLW9uc2Nyb2xsLmRpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hpZGUtZmFiLW9uc2Nyb2xsLmRpcmVjdGl2ZVwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSGlkZUZhYk9uc2Nyb2xsRGlyZWN0aXZlXHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgIEhpZGVGYWJPbnNjcm9sbERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZGVGYWJPbnNjcm9sbE1vZHVsZSB7fVxyXG4iXSwibmFtZXMiOlsiU2Nyb2xsVmlldyIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJOZ1pvbmUiLCJQbGF0Zm9ybSIsIkRvbUNvbnRyb2xsZXIiLCJBcHAiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFnQ0Usa0NBQ1UsSUFDQSxVQUVBLE1BQ0QsS0FDQyxTQUNBO1lBTkEsT0FBRSxHQUFGLEVBQUU7WUFDRixhQUFRLEdBQVIsUUFBUTtZQUVSLFNBQUksR0FBSixJQUFJO1lBQ0wsUUFBRyxHQUFILEdBQUc7WUFDRixZQUFPLEdBQVAsT0FBTztZQUNQLFFBQUcsR0FBSCxHQUFHO2lDQXRCVyxFQUFFO29DQUNDLEVBQUU7b0NBQ0YsT0FBTzs2QkFLZCxJQUFJOzZCQUNKLENBQUM7U0FlakI7Ozs7UUFFSixrREFBZTs7O1lBQWY7Z0JBQUEsaUJBcUJDOztnQkFuQkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7Z0JBR2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQSxxQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUN0QixDQUFDO29CQUNGLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQUEsRUFBRTt3QkFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO3dCQUMvQixLQUFJLENBQUMsU0FBUyxHQUFH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