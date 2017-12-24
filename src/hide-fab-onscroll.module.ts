import {NgModule } from '@angular/core';
import { HideFabOnscrollDirective } from './hide-fab-onscroll.directive';
export * from "./hide-fab-onscroll.directive";
@NgModule({
  declarations: [
    HideFabOnscrollDirective
  ],
  exports:[
    HideFabOnscrollDirective
  ]
})
export class HideFabOnscrollModule {}
