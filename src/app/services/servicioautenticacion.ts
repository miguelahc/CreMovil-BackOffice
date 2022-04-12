import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { modelousuario } from '../model/modusuario';
import { environment } from '../../environments/environment';
import { serviciousuario } from './serviciousuario';

@Injectable({ providedIn: 'root' })
export class servicioautenticacion {
    private userSubject: BehaviorSubject<modelousuario>;
    public user: Observable<modelousuario>;
    
    constructor(
        private router: Router,
        private http: HttpClient, private servusu:serviciousuario
    ) {
        this.userSubject = new BehaviorSubject<modelousuario>(JSON.parse(localStorage.getItem('usuario')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): modelousuario {
        return this.userSubject.value;
    }

    login(usuario: string, password: string) {
        var usuariotemp/* :modelousuario=null */;
        
        usuariotemp=this.servusu.getusuariopassword(usuario,password);/*.subscribe(element => { 
            console.log(element);
            usuariotemp=element; new modelousuario(element.id,element.login,element.nombre,element.apellido,element.telefono
                ,element.correo,element.estado,element.primeravez,element.fecharegistro,element.usuarioregistra
                ,element.fechamodificacion,element.usuariomodifica); 
            console.log(usuariotemp);
        });*/
        if (usuariotemp!=null){
            
            localStorage.setItem('usuario', JSON.stringify(usuariotemp));
            this.userSubject.next(usuariotemp);
        }
        return usuariotemp;
        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('usuario');
        this.userSubject.next(null);
        this.router.navigate(['authentication/login']);
    }
}