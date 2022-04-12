import { NgModule, } from '@angular/core';
import { ParametroRoutingModule } from './parametro-routing.module';
import { ParametroComponent } from './parametro.component';
import {SharedModule} from '../../shared/shared.module';
import { BEParametroPanelModule } from './beparametro/borrareditarparametro.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ParametroRoutingModule,
    SharedModule,
    NgxPaginationModule,
    
    BEParametroPanelModule,
    FormsModule,
    
    
  ],
  declarations: [ParametroComponent]
  
})
export class ParametroModule { 
  
}
