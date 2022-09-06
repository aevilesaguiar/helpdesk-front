import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  /* criar uma variavel, quando o nosso componente for contruido, o router permite que naveguemos entre os componentes */
  constructor(private router: Router) { }

  /* ngOnit ele renderiza um trecho de código quando o componente é iniciado*/
  ngOnInit(): void {
    this.router.navigate(['tecnico'])/*ele vai navegar para a rora /home */
  }

}
