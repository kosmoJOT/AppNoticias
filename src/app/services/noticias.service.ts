import { Injectable } from '@angular/core';

import { Parametros } from '../models/Parametros'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getNoticias(parametros: Parametros): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=0a00d805c15d40c6b05cc71af56a8e37';

    return this.http.get(URL);
  }
}
