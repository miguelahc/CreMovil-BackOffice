import { ChangeDetectorRef, AfterViewInit, Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SidePanelOverlayService } from '../../../shared/side-panel/side-panel-overlay.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-borrareditarservicio',
  templateUrl: './borrareditarservicio.component.html',
  styleUrls: ['./borrareditarservicio.component.scss']
})
export class BEServicioPanelComponent implements OnInit{
  estado='Habilitado';
  configurar='Configurar Enlaces';  
  
  constructor(private dialogRef: MatDialogRef<BEServicioPanelComponent>) { }


  ngOnInit(): void {
    
  }

  public close():void {
    this.dialogRef.close();
  }

  abrirpop(popover){
    if (popover.isOpen()) {
      
    } else {
      popover.open();
    }
  }
}
