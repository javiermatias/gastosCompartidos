import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../modelos/gasto';


@Injectable({
  providedIn: 'root'
})
export class GastoService {

  private url = 'https://infinite-fjord-91851.herokuapp.com/api/' + 'gastosParcial';

  private urlPost = 'https://infinite-fjord-91851.herokuapp.com/api/' + 'gastos';
  constructor(private http: HttpClient) { }

  getGastos(): Observable<any>  {
    return this.http.get<any>(this.url);
 }

 getGastosParticipantes(): Observable<any>  {
  return this.http.get<any>(this.urlPost);
}

 postGastos(gasto:Gasto) : Observable<any> {

  return this.http.post<Gasto>(this.urlPost,gasto);

}

}
