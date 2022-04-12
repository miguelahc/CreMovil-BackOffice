import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APerfilPanelComponent} from './agregarperfil.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import {SharedModule} from '../../../shared/shared.module';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { domainToASCII } from 'url';
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [APerfilPanelComponent],
  exports: [APerfilPanelComponent],
  entryComponents:[APerfilPanelComponent],
  providers:[]
})
export class APerfilPanelModule { }