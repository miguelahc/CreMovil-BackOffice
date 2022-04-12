import { NgModule } from '@angular/core';
import {MatDividerModule,MatGridListModule,MatCheckboxModule,MatToolbarModule,MatProgressSpinnerModule,MatMenuModule, MatIconModule, MatDialogModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ConfirmarModalComponent } from '../confirmar-modal/confirmar-modal.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatDividerModule, 
    MatGridListModule,MatCheckboxModule,MatToolbarModule,
    MatProgressSpinnerModule,MatMenuModule,MatIconModule,
    CommonModule
  ],
  
 
  declarations: [ConfirmarModalComponent],
  exports: [ConfirmarModalComponent],
  entryComponents:[ConfirmarModalComponent],
  
})
export class ConfirmarModalModule { 
  
}