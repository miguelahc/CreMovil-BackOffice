import {ChangeDetectionStrategy,Component, Inject, OnInit,ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PaginationInstance} from 'ngx-pagination';

import { SidePanelOverlayService } from '../../shared/side-panel/side-panel-overlay.service';
import { BEPuntoaypPanelComponent } from './bepuntoayp/borrareditarpuntoayp.component';
import { APuntoaypPanelComponent } from './apuntoayp/agregarpuntoayp.component';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ConfirmarModalComponent } from './../../shared/confirmar-modal/confirmar-modal.component';
import { serviciopuntoayp } from './../../services/serviciopuntoayp';
import { modelopuntoayp } from './../../model/modpuntoayp';
import { observable,of } from 'rxjs';


@Component({
  selector: 'app-puntoayp',
  templateUrl: 'puntoayp.component.html',
  encapsulation:ViewEncapsulation.None,
  providers: [NgbModal],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PuntoaypComponent implements OnInit{
  public query: any = '';
  servicios:boolean[]=[false,false];
  listapuntosayp:modelopuntoayp[];
  puntoaypactual:modelopuntoayp;
  inicio:number;
  fin:number;
  totalreg:number;
  

  constructor(private servpuntoayp:serviciopuntoayp, private dialog: MatDialog, private modalService: NgbModal,  private _overlaySidePanelService: SidePanelOverlayService) {
    this.config.itemsPerPage=1;
    this.inicio=1;
    this.fin=this.config.currentPage*1*this.config.itemsPerPage;
    this.config.currentPage=1;
  }
  
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
};

  ngOnInit(): void {
    
    
    this.getPuntosayp();
    
    this.totalreg=this.listapuntosayp.length; 
  }

  getPuntosayp() {
    of(this.servpuntoayp.getpuntoayps())
      .subscribe(
        res => {
          this.listapuntosayp = res;
          console.log(this.listapuntosayp.length)
        },  
        err => console.error(err)
      );
  }

  actualizarrango(valor){
      this.config.itemsPerPage=parseInt(valor);
      this.inicio=((this.config.currentPage*1)-1)*this.config.itemsPerPage+1;
      this.fin=this.config.currentPage*1*this.config.itemsPerPage;
      if (this.config.itemsPerPage*this.config.currentPage>this.listapuntosayp.length){
        this.config.currentPage=Math.trunc(this.listapuntosayp.length/this.config.itemsPerPage)+1;
        this.inicio=((this.config.currentPage*1)-1)*this.config.itemsPerPage+1;
        this.fin=this.config.currentPage*1*this.config.itemsPerPage;
      }
      console.log(this.inicio);
      console.log(this.config.itemsPerPage);
      console.log(this.fin);
      console.log(this.config);
  }

  selectcheck(id:number) {
    
    console.log(id);
    this.servicios[id-1]=!this.servicios[id-1];
    console.log(this.servicios);
  }

  open(contenido) {
    this.modalService.open(contenido);
  }

  openAgregarPuntoayp() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight='480px';
    dialogConfig.minWidth='700px';
    

      
    const dialogRef = this.dialog.open(APuntoaypPanelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
    }
  openEditarPuntoayp({id,nombre,servicio,telefono,direccion,latitud,longitud,horarioatenciondiaregular,horarioatencionfinsemana,estado}:modelopuntoayp) {
    
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data= {id,nombre,servicio,telefono,direccion,latitud,longitud,horarioatenciondiaregular,horarioatencionfinsemana,estado};
    dialogConfig.minHeight='480px';
    dialogConfig.minWidth='700px';
    


    const dialogRef = this.dialog.open(BEPuntoaypPanelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }

  openBorrarPuntoayp(id:number,$event) {
    const dialogConfig = new MatDialogConfig();
    var a;
    $event.stopPropagation();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Mensaje de Advertencia',
      mensaje: '¿Esta seguro que desea borrar el punto de atención o pagos seleccionado?'
  };
    const dialogRef = this.dialog.open(ConfirmarModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          console.log(data.respuesta);
          if (data.respuesta){
            if (!this.servpuntoayp.borrar(id)){
              alert("El punto de atención o pago no se ha podido borrar")

            }
            else{
              this.getPuntosayp();
            }
          }
        }
        
    );    
    
  }  

}



