import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



import { BEUsuarioPanelComponent } from './beusuario/borrareditarusuario.component';
import { AUsuarioPanelComponent } from './agregarusuario/agregarusuario.component';
import { SidePanelOverlayService } from '../../shared/side-panel/side-panel-overlay.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ConfirmarModalComponent } from './../../shared/confirmar-modal/confirmar-modal.component';
import { serviciousuario } from './../../services/serviciousuario';
import { servicioperfil } from './../../services/servicioperfil';
import { modelousuario } from './../../model/modusuario';
import {  Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PaginationInstance } from 'ngx-pagination';




@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.component.html',
  styleUrls: ['usuario.component.scss'],
  
})

export class UsuarioComponent implements OnInit{
  
  public query: any = '';
  public listausuarios:modelousuario[]=[];
  public usuarioactual:modelousuario;
  private usuarios$:Observable<modelousuario[]>;
  inicio:number;
  fin:number;
  totalreg:number;
  
  
 

  closeResult = '';

  constructor(private mensajes:ToastrService, private servperfil:servicioperfil,private servusuario:serviciousuario,private dialog:MatDialog, private modalService: NgbModal,private _overlaySidePanelService: SidePanelOverlayService) {
    this.config.itemsPerPage=5;
    this.inicio=1;
    this.fin=this.config.currentPage*1*this.config.itemsPerPage;
    this.config.currentPage=1;
    
  }
 ngOnInit(): void {

     this.getUsuarios(()=>{this.totalreg=this.listausuarios.length; });
     
 }
  

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 1,
    currentPage: 1
};
  open(contenido) {
    this.modalService.open(contenido);
  }

  

  getUsuarios(cbUsuarios) {
    this.usuarios$=this.servusuario.getusuarios();
    
    this.usuarios$.subscribe(datos =>{
      console.log(datos);
      this.listausuarios.length=0;
      datos.forEach(element => this.listausuarios.push(element))
      cbUsuarios();
    });  
       
        
    
    
    
    
  }

  actualizarrango(valor){
    this.config.itemsPerPage=parseInt(valor);
    this.inicio=((this.config.currentPage*1)-1)*this.config.itemsPerPage+1;
    this.fin=this.config.currentPage*1*this.config.itemsPerPage;
    if (this.config.itemsPerPage*this.config.currentPage>this.listausuarios.length){
      this.config.currentPage=Math.trunc(this.listausuarios.length/this.config.itemsPerPage)+1;
      this.inicio=((this.config.currentPage*1)-1)*this.config.itemsPerPage+1;
      this.fin=this.config.currentPage*1*this.config.itemsPerPage;
    }
    
}
  
  openAgregarUsuario() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minHeight='550px';
    dialogConfig.minWidth='700px';
    

      
    const dialogRef = this.dialog.open(AUsuarioPanelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
         data => {
          if (data!=null){ 
            this.usuarioactual=data;
            this.listausuarios.push(this.usuarioactual);
            this.mensajes.success("Usuario "+this.usuarioactual.nombre + "agregado correctamente");
          }
        }
    );    
  }

  openEditarUsuario({id,login,nombre,apellido,telefono,correo}:modelousuario) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data= {id,login,nombre,apellido,telefono,correo};
    dialogConfig.minHeight='550px';
    dialogConfig.minWidth='700px';

    const dialogRef = this.dialog.open(BEUsuarioPanelComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          if (data!=null){
            this.usuarioactual=data;
            var i;
            for(i=0;i<this.listausuarios.length;i=i+1){
              if(this.listausuarios[i].id==this.usuarioactual.id)
              this.listausuarios[i]=this.usuarioactual;
            }
            console.log(data);
            this.mensajes.success("Usuario "+this.usuarioactual.nombre + " actualizado correctamente","Mensaje Informativo")
            
          }
          
        }
      );    
  }

  openBorrarUsuario(id:number,$event) {
    const dialogConfig = new MatDialogConfig();
    var a;
    $event.stopPropagation();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      titulo: 'Mensaje de Advertencia',
      mensaje: '¿Esta seguro que desea borrar el usuario seleccionado?'
    };
    const dialogRef = this.dialog.open(ConfirmarModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => {
          console.log(data.respuesta);
          if (data.respuesta){
            if (!this.servusuario.borrar(id)){
              alert("El usuario no se ha podido borrar")

            }
            else{
              this.getUsuarios(()=>{this.totalreg=this.listausuarios.length; });
            }
          }
        }
        
    );    
    
  }
  
  abrirpop(popover){
    if (popover.isOpen()) {
      
    } else {
      popover.open();
    }
  }
  

  
}

