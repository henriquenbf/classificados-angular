import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  color = 'accent';

  isDisabled = true;

  idx = 0;

  buttonName = 'Meu Botão';

  selectDisabled = false;

  selectedOption = 0;

  inputName = 'Blah';

  carsBackground = 'blue';

  categorias = [
    {
      nome: 'Notebooks',
      qtdProdutos: 6,
      icone: 'alarm'
    },
    {
      nome: 'Video-games',
      qtdProdutos: 2,
      icone: 'backup'
    },
    {
      nome: 'Automóveis',
      qtdProdutos: 5,
      icone: 'android'
    },
    {
      nome: 'Fones de ouvido',
      qtdProdutos: 4,
      icone: 'code'
    }
  ];

  categoria = {
    id: 1,
    nome: 'Computadores',
    valor: 1250.00
  };

  produto = {
    nome: '',
    valor: 0
  };


  constructor() {}

  ngOnInit(): void {
    /*setInterval(() => {
      this.isDisabled = !this.isDisabled;
      this.idx++;
    }, 1000);*/
  }

  save() {
    console.log('fsdfhai');
  }

  inc() {
    this.idx++;
    this.buttonName = 'Clicado ' + this.idx + ' vezes';
  }

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
    this.carsBackground = this.selectDisabled ? 'red' : 'blue';
  }

  selectChanged(event) {
    console.log(event);
    this.selectedOption = event.value;
  }

  inputEvent(event) {
    console.log(event.target.value);
  }

  showProdutoLabel() {
    return this.produto.nome !== '' && this.produto.valor > 0;
  }

  editarCategoria() {
    console.log('Edição de categoria');
  }

}
