import { ChangeDetectorRef, AfterViewInit, Component, OnInit } from '@angular/core';

import { MatDialogConfig, MatDialogRef } from '@angular/material';
import { modelopuntoayp } from './../../../model/modpuntoayp';
import { serviciopuntoayp} from './../../../services/serviciopuntoayp';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";



@Component({
  selector: 'app-agregarpuntoayp',
  templateUrl: './agregarpuntoayp.component.html',
  styleUrls: ['./agregarpuntoayp.component.scss']
})
export class APuntoaypPanelComponent implements OnInit{
  form:FormGroup;
  closeResult = '';
  listatelefonos:string[];
  _puntoayp:modelopuntoayp;
  
  
  enviado=false;

  constructor(private _serviciopuntoayp:serviciopuntoayp,private fb: FormBuilder,private dialogRef: MatDialogRef<APuntoaypPanelComponent>) { 
    this.enviado=false;
    this._puntoayp=new modelopuntoayp(_serviciopuntoayp.getpuntoayps().length+1,"","","","",0,0,0,0,0);
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

  ngOnInit(): void {
    this.listatelefonos=["3422323","72174790","3333333","70012323"]
    
    
    
  }

  get f() { return this.form.controls; }

   
  close():void {
    this.dialogRef.close();
  }

  agregartelefono(){
    this.listatelefonos.push(this.f.telefono.value);
    
  }

  eliminartelefono(numero){
    var indice:number;
    indice=this.listatelefonos.findIndex(numero);
    if (indice>=0){
      this.listatelefonos.splice(indice,1);
    }
  }
  grabar(){
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
      

      if (this._serviciopuntoayp.agregar(this._puntoayp))
      {
        
        console.log("Los datos se guardaron correctamente");
        
        this.close();
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
