# Helpdesk

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Iniciando um projeto em Angular
https://material.angular.io/guide/getting-started

ng n helpdesk

## Components Angular
https://material.angular.io/components/categories

ng add @angular/material

## Comunicação com serviços de back-end usando HTTP

Inserir no module.ts

import { HttpClientModule } from '@angular/common/http';


## imports component Angular Material
https://material.angular.io/components/categories


## Rotas
Quando eu quero mostrar apenas um componente.

<router-outlet></router-outlet>

Essa tag renderiza o component que você implentar nas suas rotas.

Ex: 
const routes: Routes = [

/quando o meu path for vazio eu renderizo com NavComponent
  {path:'',component:NavComponent
}
];


## Para adicionar a alteração no github no mesmo commit(commit anterior)

## Gerar Gradiente

- https://cssgradient.io/


## FormControl


Rastreia o valor e o status de validação de um controle de formulário individual.

Ex:  email=new FormControl(null, Validators.email); ele valida se o valor digitado é um formato email

## ngx toastr

https://www.npmjs.com/package/ngx-toastr

instalar cli: npm i ngx-toastr

ngx-toastr é uma biblioteca com componente de notificação com muitas opções de configuração.
