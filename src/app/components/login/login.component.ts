import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from '../../models/credenciais';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  logar(){

      this.toastr.error('Usuario e/ou senha inválidos', 'Login');
      this.creds.senha='';
  }


  validaCampos(): boolean{

    return this.email.valid && this.senha.valid;
    /*
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }*/
  }

}
