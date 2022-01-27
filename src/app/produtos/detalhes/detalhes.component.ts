import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute)  { }

  public produtoDetalhe!: Produto;

  // ngOnInit(): void {

  ngOnInit(): void {

    // let id = this.activatedRoute.snapshot.params['id'];

    //lista-produto Method
    this.activatedRoute.paramMap.subscribe(params => {

      var id = params.get('id')!;

      console.log('Parametro Id');
      console.log(id);

      this.produtoService.obterProdutoPorId(id)
      .subscribe(
        produto => {
          this.produtoDetalhe = produto;
          console.log(produto);
        },
        error => {
          console.log(error)
        },
        
      )

    });





  }

}
