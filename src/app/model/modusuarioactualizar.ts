import { OperatorFunction } from "rxjs";

export class modelousuario{
    pipe(arg0: OperatorFunction<unknown, unknown>) {
      throw new Error('Method not implemented.');
    }
    id:number;
    login:string;
    nombre:string;
    apellido:string;
    telefono:string;
    correo:string;
    estado:string;
    primeravez?:string;
    fecharegistro?:string;
    usuarioregistra?:number;
    fechamodificacion?:string;
    usuariomodifica?:number;
    
    constructor(vid,vlogin,vnombre,vapellido,vtelefono,vcorreo,vestado,vprivez,vfechareg,vusureg,vfecmod,vusumod){
        this.id=vid;
        this.login=vlogin;
        this.nombre=vnombre;
        this.apellido=vapellido;
        this.telefono=vtelefono;
        this.correo=vcorreo;
        this.estado=vestado;
        this.primeravez=vprivez;
        this.fecharegistro=vfechareg;
        this.usuarioregistra=vusureg;
        this.fechamodificacion=vfecmod;
        this.usuariomodifica=vusumod;
        
        
    }

    
}