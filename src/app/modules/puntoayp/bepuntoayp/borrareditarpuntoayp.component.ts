import { ChangeDetectorRef, AfterViewInit, Component, OnInit, Inject} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SidePanelOverlayService } from '../../../shared/side-panel/side-panel-overlay.service';
import { ConfirmarModalComponent } from '../../../shared/confirmar-modal/confirmar-modal.component';
import { MatDialog } from '@angular/material';
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatDialogConfig,MatDialogRef } from '@angular/material';
import { modelopuntoayp } from './../../../model/modpuntoayp';
import { serviciopuntoayp } from './../../../services/serviciopuntoayp';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-borrareditarpuntoayp',
  templateUrl: './borrareditarpuntoayp.component.html',
  styleUrls: ['./borrareditarpuntoayp.component.scss']
})
export class BEPuntoaypPanelComponent implements OnInit{
  form: FormGroup;
  
  dropdownSettings = {};
  idperfil:number;
  _puntoayp:modelopuntoayp;
  listatelefonos:string[];
  enviado=false;


  constructor(private _serviciopuntoayp:serviciopuntoayp,private fb: FormBuilder,private dialogrefp:MatDialogRef<BEPuntoaypPanelComponent>,@Inject(MAT_DIALOG_DATA) {id,nombre,servicio,telefono,direccion,latitud,longitud,horarioatenciondiaregular,horarioatencionfinsemana,estado}:modelopuntoayp) { 
    this.enviado=false;
    this.idperfil=id;
    this._puntoayp=new modelopuntoayp(id,nombre,servicio,telefono,direccion,latitud,longitud,horarioatenciondiaregular,horarioatencionfinsemana,estado);
    
    this.form = fb.group({
      nombre: ['', Validators.required],
      servicios: ['', Validators.required],
      telefono: ['', ],
      direccion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      hadr:[false,],
      hafs:[false,],
      estado:['Habilitado',]
  });
  }

  get f() { return this.form.controls; }

  ngOnInit(): void {
    
    
    
    
  }

  agregartelefono(){
    this.listatelefonos.push(this.f.telefono.value);

  }

  public close():void {
    this.dialogrefp.close();
  }

  public grabar(){
    this.enviado=true;
    if (this.form.valid) {
      this._puntoayp.nombre=this.form.value.nombre;
      this._puntoayp.servicio=this.form.value.servicio;
      this._puntoayp.telefono=this.form.value.telefono;
      this._puntoayp.direccion=this.form.value.direccion;
      this._puntoayp.latitud=this.form.value.latitud;
      this._puntoayp.longitud=this.form.value.longitud;
      this._puntoayp.horarioatenciondiaregular=this.form.value.hadr;
      this._puntoayp.horarioatencionfinsemana=this.form.value.hafs;
      this._puntoayp.estado=this.form.value.estado;

      if (this._serviciopuntoayp.actualizar(this._puntoayp))
      {
        
          this.close();
          console.log("Los datos se guardaron correctamente");
          
        
      }
      else
      {
        console.log("Sucedio un error al guardar los datos")
        
      }
    }
    else{
      return;
    }
    
  }
  
}
