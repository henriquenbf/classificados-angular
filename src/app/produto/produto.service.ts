import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  buscaListaProdutos() {
    const produtos = this.httpClient.get(`http://localhost:8080/produtos/`);
    console.log(produtos);
    return produtos;
  }

}
