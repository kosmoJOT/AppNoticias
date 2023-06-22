import { Component } from '@angular/core';

import { Parametros } from './models/Parametros'
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNoticias';
  listadoNoticias: any[] = [];

  constructor( private _servicioNoticias: NoticiasService) {}

  buscarNoticias(parametros: Parametros){
    this._servicioNoticias.getNoticias(parametros).subscribe( (result) =>{
      this.listadoNoticias = result.articles;
    });
  }
}
