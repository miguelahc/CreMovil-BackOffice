import {Component, Inject, OnInit,ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { SidePanelOverlayService } from '../../shared/side-panel/side-panel-overlay.service';
import { BEServicioPanelComponent } from './beservicio/borrareditarservicio.component';
import { MatDialogConfig } from '@angular/material';
import { ConfirmarModalComponent } from '../../shared/confirmar-modal/confirmar-modal.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-servicio',
  templateUrl: 'servicio.component.html',
  styleUrls: ['servicio.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers: [NgbModal]
})
export class ServicioComponent implements OnInit{
 
  constructor(private dialog: MatDialog, private modalService: NgbModal,private _overlaySidePanelService: SidePanelOverlayService) {
    
  }

  ngOnInit(): void {
    
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        titulo: '¿Esta Seguro?',
        mensaje: 'Borrar el Servicio no se puede revertir'
    };

      
    const dialogRef = this.dialog.open(ConfirmarModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }
   
  public openservicio():void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.scrollStrategy

    

      
    const dialogRef = this.dialog.open(BEServicioPanelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }

  abrirpop(popover){
    if (popover.isOpen()) {
      
    } else {
      popover.open();
    }
  }

  
  
  public show(): void {
    this._overlaySidePanelService.setContent(BEServicioPanelComponent);
    this._overlaySidePanelService.show();
  }

}



