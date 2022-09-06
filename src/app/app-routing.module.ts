import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';

//criando a rota
const routes: Routes = [
  { path:'login', component:LoginComponent},

  //quando o meu path for vazio eu renderizo com NavComponent
  {
    path:'', component:NavComponent, children:[
      {path: 'home', component: HomeComponent}, //children significa filha , rota filha do componente nav
      { path: 'tecnicos', component:TecnicoListComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
