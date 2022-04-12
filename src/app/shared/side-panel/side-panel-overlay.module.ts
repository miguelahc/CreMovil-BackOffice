import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidePanelOverlayService } from './side-panel-overlay.service';
import { SidePanelOverlayComponent } from './side-panel-overlay.component';

@NgModule({
  declarations: [
    SidePanelOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidePanelOverlayComponent
  ],
  providers: [
    SidePanelOverlayService
  ]
})
export class SidePanelOverlayModule { }