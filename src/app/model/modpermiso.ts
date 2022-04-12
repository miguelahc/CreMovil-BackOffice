export class modpermiso {
    idpermiso: number;
    nombrepermiso: string;
    pantallapermiso:string;
    idpadre:number;
    orden:number;
    estado:boolean;

    constructor(id,nombre,pantallapermiso,idpadre,orden){
      this.idpermiso=id;
      this.nombrepermiso=nombre;
      this.pantallapermiso=pantallapermiso;
      this.idpadre=idpadre;
      this.orden=orden;
      this.estado=false;
    }
  }
  export class modpermisoinsertar{
  
    IDPERM : number;
    NOPERM : string;
    PAPERM : string;
    IDPADR : number;
    NUORDE : 2;

    constructor(id,nombre,pantalla,idpadre,orden){
      this.IDPERM=id;
      this.NOPERM=nombre;
      this.PAPERM=pantalla;
      this.IDPADR=idpadre;
      this.NUORDE=orden;

    }
  }

  export class modpermisoactualizar{
    NOPERM : string;
    PAPERM : string;
    IDPADR : number;
    NUORDE : 2;

    constructor(nombre,pantalla,idpadre,orden){
      this.NOPERM=nombre;
      this.PAPERM=pantalla;
      this.IDPADR=idpadre;
      this.NUORDE=orden;

    }
  }