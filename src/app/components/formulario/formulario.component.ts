import { Component, Output, EventEmitter } from '@angular/core';

import { Categoria } from '../../models/Categoria'
import { Pais } from '../../models/Pais'
import { Parametros } from '../../models/Parametros'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<Parametros>();

  categoriaSeleccionada: string = '';
  paisSeleccionado: string = '';

  categorias: Categoria[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertaiment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'}
  ];

  paises: Pais[] = [
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'gb', nombre: 'Reino Unido'}
  ]

  buscarNoticia(){
    const PARAMETROS: Parametros = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    };
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
