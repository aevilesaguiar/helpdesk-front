import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from '../../models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais={
    email:'',
    senha:''
  }

                                                //o primeiro parametro é any
  email=new FormControl(null, Validators.email);//segundo parametro email. ele valida se o valor digitado da variavel email é um formato email
  senha=new FormControl(null, Validators.minLength(3));//a senha deve possuir pelo o menos 3 caracteres

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

}
