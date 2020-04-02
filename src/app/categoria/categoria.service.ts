import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  buscaListaCategorias() {
    const categorias = this.httpClient.get(`https://localhost:8080/categorias/`);
    console.log(categorias);
    return categorias;
  }

}
