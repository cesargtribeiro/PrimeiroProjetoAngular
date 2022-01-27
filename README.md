# PrimeiroProjetoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Dicas sequenciais de instalação e comentários

--npm
https://www.npmjs.com/package/ngx-bootstrap

--nodeJs
https://nodejs.org/en/

--npm
npm install npm@latest -g

--angular cli
https://angular.io/cli

npm install -g @angular/cli

ng new nomedoprojeto

--se necessario
https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema

--Para rodar a aplicação e abrir o browser
ng -s -o

--para a aplicação rodando
ctrl + c 

--build para publicação
ng b
é gerado a pasta dist

++parei na aula m04v05++

++Instalar Extensoes
Nx Console
angular Snippets
Better Comments
GitLens
npm
npm intelisense
vscode-icons

Nightly Extension
Open the extensions view (ctrl+shift+x) and search for @builtin @id:ms-vscode.js-debug
Right click on the JavaScript Debugger extension and Disable it.
Search for @id:ms-vscode.js-debug-nightly in the extensions view.
Install that extension.

Instalar
https://augury.rangle.io/

----------------------------------------------------------------------
--criar o componete
ng generete component pasta/nomedocomponente
ng g c Home
--criar modulo
ng g module Funcionalidade
--criar servico
ng g service Servico

----------------------------------------------------------------------
ng new --minimal 
----------------------------------------------------------------------

Interpolation
{{ meuDado }}
<img src="{{minhaUrl}}">

Property Binding
<img [src]="minhaUrl">

Event Binding
<button (click)='clickContatodor()'>Clique-me</button>

Two-way Binding [()]
<input class="form-control" type="text" [(ngModel)]="evento.nome" />
<label>Nome do evento: {{evento.nome}}</label>

----------------------------------------------------------------------
--instalar
https://www.npmjs.com/package/json-server

Start JSON Server
json-server --watch produtos.json

----------------------------------------------------------------------

titlecase
{{ produto.nome | titlecase }}

currency
{{ produto.valor | currency }}
{{ produto.valor | currency:'BRL':true:'1.2-2':'pt' }}


<div *ngIf="produto.promocao" class="card-body">

<div [ngSwitch]="produto.promocao">
	<p *ngSwitchCase="true">Promoção!</p>
	<p *ngSwitchCase="false">Por apenas:</p>
</div>

<div *ngFor="let produto of produtos" class="col-md-4" style="padding-bottom: 30px;">

----------------------------------------------------------------------
No projeto não se versiona a pasta node_module
apagar o node_module e em seguida npm i para instalar as versoes do projeto

instalar
npm-check-updates

verificar se tem atualizacao
ncu

--help
ncu -h

--atualizar a versão
ncu -u

--atualizar os pacotes
npm i



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
