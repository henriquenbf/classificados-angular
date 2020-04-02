import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  lastId = 0;

  produtos = [];

  produto = {
    id: 0,
    nome: '',
    valor: null,
    situacao: 0
  };

  situacoes = [
    {
      id: 1,
      descricao: 'Novo'
    },
    {
      id: 2,
      descricao: 'Usado'
    }
  ];

  getDescricaoSituacoesFromId(idSituacao: number): string {
    let desc = 'Deu ruim';
    this.situacoes.forEach(situacao => {
      if (situacao.id == idSituacao) {
        desc = situacao.descricao;
      }
    });
    return desc;
  }

  constructor() { }

  ngOnInit(): void {
  }

  inicializaNovoProduto() {
    this.produto = {
      id: 0,
      nome: '',
      valor: null,
      situacao: 0
    };
  }

  salvarProduto() {
    this.produto.id = ++this.lastId;
    this.produtos.push(this.produto);
    this.inicializaNovoProduto();
    console.log(this.produtos);
  }

  cancelar() {
    this.inicializaNovoProduto();
  }

  editarProduto(idProduto: number) {
    console.log('Editando produto: ' + idProduto);
  }

}
