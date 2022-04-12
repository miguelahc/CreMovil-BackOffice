import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APuntoaypPanelComponent} from './agregarpuntoayp.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {SharedModule} from '../../../shared/shared.module';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { domainToASCII } from 'url';
import { MatSlideToggleModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

    MatSlideToggleModule
  ],
  declarations: [APuntoaypPanelComponent],
  exports: [APuntoaypPanelComponent],
  entryComponents:[APuntoaypPanelComponent],
  providers:[]
})
export class APuntoaypPanelModule { }