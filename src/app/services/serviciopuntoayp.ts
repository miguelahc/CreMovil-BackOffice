import { Injectable } from "@angular/core";
import { modelopuntoayp } from "../model/modpuntoayp";

@Injectable({
    providedIn: 'root'
})

export class serviciopuntoayp{
    private valorpuntoayp:modelopuntoayp;
    private listapuntoayp:modelopuntoayp[]=[];
     
    constructor(){
        console.log("entro al constructor");
        this.listapuntoayp= [new modelopuntoayp(1,"Banco Union",1,"Av. Pirai 324","3510845",0,0,0,0,0)];
        console.log(this.listapuntoayp.toString());
    } 

    getpuntoayp(id:number){
         var resp=null;
        for(var i=0;i<this.listapuntoayp.length;i++){
            if (this.listapuntoayp[i].id==id)
            { 
                resp=this.listapuntoayp[i];
                
            }
        }
        return resp;

     }

     getpuntoayps(){
         return this.listapuntoayp;
     }

     actualizar(puntoayp:modelopuntoayp){
         var resp=false;
        for(var i=0;i<this.listapuntoayp.length;i++){
            if (this.listapuntoayp[i].id==puntoayp.id)
            { 
                this.listapuntoayp[i].nombre=puntoayp.nombre;
                this.listapuntoayp[i].servicio=puntoayp.servicio;
                this.listapuntoayp[i].telefono=puntoayp.telefono;
                this.listapuntoayp[i].direccion=puntoayp.direccion;
                this.listapuntoayp[i].latitud=puntoayp.latitud;
                this.listapuntoayp[i].longitud=puntoayp.longitud;
                this.listapuntoayp[i].horarioatenciondiaregular=puntoayp.horarioatenciondiaregular;
                this.listapuntoayp[i].horarioatencionfinsemana=puntoayp.horarioatencionfinsemana;
                this.listapuntoayp[i].estado=puntoayp.estado;
                resp=true;
                
            }
        }
        return resp;
        
    }

     borrar(id:number){
        var resp=false;
        for(var i=0;i<this.listapuntoayp.length;i++){
            if (this.listapuntoayp[i].id==id)
            { 
                this.listapuntoayp.splice(i,1);
                resp=true;
                
            }
        }
        return resp;
     }

     agregar(perfil:modelopuntoayp){
        var resp=false;
       for(var i=0;i<this.listapuntoayp.length;i++){
           if (this.listapuntoayp[i].id==perfil.id)
           { 
               
               resp=true;
               
           }
       }
       if (!resp){
           this.listapuntoayp.push(perfil);
       }
       return !resp;
       
     }
}