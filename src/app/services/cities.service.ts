import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citie } from '../models/citie';
import { Global } from './global';


@Injectable()
export class CitieService{

    public url: string;
    public citie: Citie;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
 
    }

    testService(){
        return 'Probando el servicio de Angular';
    
    }

    //Guardar las ciudades
    saveCitie(citie: Citie): Observable<any>{
        let params = JSON.stringify(citie);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save', params, {headers: headers});
        
    }

    //Listar las ciudades
    getCities(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'cities', {headers: headers});
    }

    //Mostrar ciudades
    getCitie(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'citie/'+ id, {headers: headers});

    }

    deleteCitie(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url+'citie/'+id, {headers: headers});
    }

    updateCitie(citie): Observable<any>{
        let params = JSON.stringify(citie)
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url+'citie/'+citie._id, params, {headers: headers});
    }
}

