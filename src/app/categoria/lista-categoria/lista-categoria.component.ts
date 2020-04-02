import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

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

  categorias;

  categoria = {
    id: 1,
    nome: 'Computadores',
    valor: 1250.00
  };

  produto = {
    nome: '',
    valor: 0
  };


  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    console.log('ngOnInit Categoria Component');
    this.categoriaService.buscaListaCategorias().subscribe((data) => {
      console.log(data);
      this.categorias = data[0];
    });
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
