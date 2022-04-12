import { OperatorFunction } from "rxjs";

export class modelopuntoayp{
    pipe(arg0: OperatorFunction<unknown, unknown>) {
      throw new Error('Method not implemented.');
    }
    id:number;
    nombre:string;
    servicio:string;
    direccion:string;
    telefono:string;
    latitud:number;
    longitud:number;
    horarioatenciondiaregular:boolean;
    horarioatencionfinsemana:boolean;
    estado:boolean;
    constructor(vid,vnombre,vservicio,vdireccion,vtelefono,vlatitud,vlongitud,vhadr,vhafs,vestado){
        this.id=vid;
        this.servicio=vservicio;
        this.nombre=vnombre;
        this.telefono=vtelefono;
        this.direccion=vdireccion;
        this.latitud=vlatitud;
        this.longitud=vlongitud;
        this.horarioatenciondiaregular=vhadr;
        this.horarioatencionfinsemana=vhafs;
        this.estado=vestado;
    }

    
}