import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  NgZone
} from "@angular/core";
import { ScrollView } from "ionic-angular/util/scroll-view";
import { Platform, App, DomController, Content } from "ionic-angular";

@Directive({
  selector: "[hideFabOnscroll]"
})
export class HideFabOnscrollDirective implements AfterViewInit, OnDestroy {
  //TODO:constants
  private TOP_THRESHOLD = 56;
  private BOTTOM_THRESHOLD = 10;
  private TRANSITION_DELAY = "500ms";
  //TODO: scroll view from the ionic itself for scroll events
  private scroll: ScrollView;

  // render vars so we aren't scoping new ones each time
  private scrollDir = null;
  private scrollTop = 0;

  //Content where the fab button is displayed
  @Input("hideFabOnscroll") content: Content;
  // Our fab to hide
  fab: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    // private platform: Platform,
    private zone: NgZone,
    public plt: Platform,
    private domCtrl: DomController,
    private app: App
  ) {}

  ngAfterViewInit() {
    //After initializing all the elements , set their transiotn property
    this.initFab();
    // TODO: init the scroll view and enable scroll events
    //then bind the function onScroll
    this.scroll = new ScrollView(this.app, this.plt, this.domCtrl);
    this.scroll.enableEvents();
    this.zone.runOutsideAngular(() => {
      this.scroll.init(
        this.content.getScrollElement(),
        this.content._cTop,
        this.content._cBottom
      );
      this.scroll.onScroll = ev => {
        this.scrollDir = ev.directionY;
        this.scrollTop = ev.scrollTop;
      };
      this.scroll.onScrollStart = ev => {
        this.render(null);
      };
    });
  }

  ngOnDestroy() {
    this.scroll && this.scroll.destroy();
  }

  render(ts) {
    let rAFInt = this.plt.raf(ts => this.render(ts));
    if (this.scroll.isScrolling) {
      this.hideFab(ts);
    } else {
      this.plt.cancelRaf(rAFInt);
    }
  }
  hideFab(timestamp) {
    // GOING UP
    if (this.scrollDir == "up" && this.scrollTop > this.BOTTOM_THRESHOLD) {
      this.renderer.setStyle(this.fab, "opacity", "1");
      this.renderer.setStyle(this.fab, this.plt.Css.transform, "scale3d(1,1,1)");
      // GOING DOWN
    } else if (this.scrollDir == "down" && this.scrollTop>this.TOP_THRESHOLD) {
      this.renderer.setStyle(this.fab,this.plt.Css.transform, "scale3d(.1,.1,.1)");
      this.renderer.setStyle(this.fab, "opacity", "0");
    }
  }
  initFab() {
    this.fab = this.el.nativeElement;

    this.renderer.setStyle(
      this.fab,
      this.plt.Css.transition,
      `transform ${this.TRANSITION_DELAY}, opacity ${this.TRANSITION_DELAY}`);
  }
}
