import { Injectable } from "@angular/core";
import { modelousuario, modelousuarioactualizar, modelousuarioinsertar } from "../model/modusuario";
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from "../../environments/environment.prod";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class serviciousuario {
    private valorusuario: modelousuario;
    private listausuario: modelousuario[] = [];
    private cadenahttp: string;
    valorpar: modelousuario;

    constructor(private http: HttpClient) {
        this.listausuario = [];

    }

    setUsers(users){
        this.listausuario = users;
    }

    getusuariopassword(usuario: string, password: string) {
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/Login?P_NoLogi=" + usuario + "&P_Pass=" + password
        return this.http.post<any>(this.cadenahttp, null).pipe(map((datos) => {
            var resp: modelousuario = null;            
            if (datos.isOk == "S") {
                return datos;
            }
            else {
                return datos;
            }
        }));
    }

    getusuario(id: number) {

        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/RetornaUsuario?idusuario=" + id
        return this.http.post<any>(this.cadenahttp, null).subscribe(datos => {

            this.valorusuario = datos.usuario[0];

            return this.valorusuario;
        });


    }

    getusuarios(): Observable<any> {
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/RetornaUsuarios"
        return this.http.post<any>(this.cadenahttp, null);
    }

    getUsersWithProfiles(): Observable<any> {
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/RetornaUsuarios2"
        return this.http.get<any>(this.cadenahttp);
    }

    getusuariosfiltro(Id: string): Observable<any> {

        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/RetornaUsuarios"
        return this.http.post<any>(this.cadenahttp, null).pipe(map(datos => {

            this.listausuario.length = 0;
            this.listausuario = [];
            datos.usuarios.forEach(element => {
                if (element.estado == Id) {
                    this.listausuario.push(new modelousuario().mapModel(element));
                }
            });




            return this.listausuario;
        }));
    }

    actualizar(usuario: modelousuario, contrasena: string) {
        var usuact: modelousuarioactualizar;
        usuact = new modelousuarioactualizar(usuario.id, usuario.login, contrasena, usuario.nombre, usuario.apellido
            , usuario.telefono, usuario.correo, usuario.estado, usuario.primeravez, usuario.usuariomodifica);
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/ActualizaUsuario"
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(usuact);

        return this.http.post<any>(this.cadenahttp, body, { 'headers': headers });
    }

    cambiarpassword(id: number, contrasena: string) {
        var resp = false;
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/ActualizaPassword?P_IdUsuario=" + id + "&P_Password='" + contrasena + "'"
        return this.http.post<any>(this.cadenahttp, null);
    }

    borrar(id: number) {
        var resp = false;
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/EliminarUsuario?IdUsuario=" + id
        return this.http.post<any>(this.cadenahttp, null);
    }



    habilitar(idusuario: number) {
        var resp;

        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/HabilitarUsuario?IdUsuario=" + idusuario
        return this.http.post<any>(this.cadenahttp, null);
    }

    deshabilitar(idusuario: number) {
        var resp;

        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/DeshabilitarUsuario?IdUsuario=" + idusuario
        return this.http.post<any>(this.cadenahttp, null);
    }


    agregar(usuario: modelousuario) {
        var usuag: modelousuarioinsertar;
        usuag = new modelousuarioinsertar(usuario.login, 'cre123', usuario.nombre, usuario.apellido
            , usuario.telefono, usuario.correo, usuario.estado, usuario.primeravez, usuario.usuarioregistra);
        this.cadenahttp = environment.apiURL + "/clwprd/ws_pagosweb/cre.movilapp/ActualizaUsuario"
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(usuag);

        return this.http.post<any>(this.cadenahttp, body, { 'headers': headers });

    }
}