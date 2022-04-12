export class modeloperfil{
    idperfil:number;
    nombreperfil:string;
    descripcionperfil:string;
    estadoperfil:string;
    fecharegistro:string;
    usuarioregistra:number;
    fechamodificacion:string;
    usuariomodificacion:number;
    
    constructor(vid,vnombre,vdescripcion,vestado,vfecreg,vusureg,vfecmod,vusumod){
        this.idperfil=vid;
        this.nombreperfil=vnombre;
        this.descripcionperfil=vdescripcion;
        this.estadoperfil=vestado;
        this.fecharegistro=vfecreg;
        this.usuarioregistra=vusureg;
        this.fechamodificacion=vfecmod;
        this.usuariomodificacion=vusumod;
    }

    
}

export class modeloperfilactualizar{
    IDPERF:number;
    NOPERF:string;
    DSPERF:string;
    STPERF:string;
    IDUSUAMODI:number;
    
    constructor(vid,vnombre,vdescripcion,vestado,vusumod){
        this.IDPERF=vid;
        this.NOPERF=vnombre;
        this.DSPERF=vdescripcion;
        this.STPERF=vestado;
        this.IDUSUAMODI=vusumod;
    }

    
}

export class modeloperfilinsertar{
    
    NOPERF:string;
    DSPERF:string;
    STPERF:string;
    IDUSUAMODI:number;
    
    constructor(vnombre,vdescripcion,vestado,vusumod){
        
        this.NOPERF=vnombre;
        this.DSPERF=vdescripcion;
        this.STPERF=vestado;
        this.IDUSUAMODI=vusumod;
    }

    
}