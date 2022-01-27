import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from './produto';
import { Observable } from "rxjs";

@Injectable()

export class ProdutoService {

constructor(private http: HttpClient){}

    protected UrlService1: string = "http://localhost:3000/";

    obterProdutos() : Observable<Produto[]> {
        return this.http
            .get<Produto[]>(this.UrlService1 + "produtos");
    }

    obterProdutoPorId(id : string) : Observable<Produto> {
        console.log('Parametro api');
        console.log(id);
        
        return this.http
            .get<Produto>(this.UrlService1 + "produtos/" + id);
    }
}