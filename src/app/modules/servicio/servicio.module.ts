import { NgModule, } from '@angular/core';
import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioComponent } from './servicio.component';
import {SharedModule} from '../../shared/shared.module';
import { SidePanelOverlayModule } from '../../shared/side-panel/side-panel-overlay.module';
import { BEServicioPanelModule } from './beservicio/borrareditarservicio.module';

@NgModule({
  imports: [
    ServicioRoutingModule,
    SharedModule,
    SidePanelOverlayModule,
    BEServicioPanelModule,
    

  ],
  declarations: [ServicioComponent]
  
})
export class ServicioModule { 
  
}
