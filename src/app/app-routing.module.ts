import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [

  //quando o meu path for vazio eu renderizo com NavComponent
  {
    path:'', component:NavComponent, children:[
      {path: 'home', component: HomeComponent} //children significa filha , rota filha do componente nav
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
