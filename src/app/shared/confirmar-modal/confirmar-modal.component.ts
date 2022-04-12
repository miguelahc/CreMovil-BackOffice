import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.scss']
})
export class ConfirmarModalComponent implements OnInit, OnDestroy {

  public titulo: String;
  public mensaje: String;

  constructor(
    
    private dialogRef: MatDialogRef<ConfirmarModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.titulo = data.titulo;
    this.mensaje = data.mensaje;
}

  ngOnInit(): void {
    
  }

  close() {
    
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    
  }
}
