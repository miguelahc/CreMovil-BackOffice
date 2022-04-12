import { NgModule, } from '@angular/core';
import { PuntoaypRoutingModule } from './puntoayp-routing.module';
import { PuntoaypComponent } from './puntoayp.component';
import {SharedModule} from '../../shared/shared.module';
import { BEPuntoaypPanelModule } from './bepuntoayp/borrareditarpuntoayp.module';
import { APuntoaypPanelModule } from './apuntoayp/agregarpuntoayp.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PuntoaypRoutingModule,
    SharedModule,
    NgxPaginationModule,
    
    BEPuntoaypPanelModule,
    APuntoaypPanelModule,
    FormsModule,
    
    
  ],
  declarations: [PuntoaypComponent]
  
})
export class PuntoaypModule { 
  
}
