import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BEServicioPanelComponent} from './borrareditarservicio.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {SharedModule} from '../../../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material';
import {MatDividerModule,MatGridListModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatMenuModule, MatIconModule, MatDialogModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    MatSlideToggleModule,
    MatDialogModule
    
  ],
  declarations: [BEServicioPanelComponent
    
    ],
  exports: [BEServicioPanelComponent
    
    ],
  entryComponents:[BEServicioPanelComponent],
})
export class BEServicioPanelModule { }