import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  afficheur = 0;

  taille_variable_input = 0;

  telephone = "";
  code = "";
  valeur_tel = "";

  opt = "";
  config = {
    length:4,
    allowNumbersOnly: true,
    inputClass: 'opt_input',
    containerClass: 'opt_input_solo'
  };

  le_decompte = "03:00";

  constructor() { }

  ngOnInit() {

  }

  onOtpChange(event: any) {

    this.opt = event;
    console.log(this.opt);
    

  }

  valeur_actuelle() { 
    
    this.taille_variable_input = this.telephone.length;
    // console.log(this.taille_variable_input);
    // console.log(this.telephone);
   return this.taille_variable_input;

  }

  aller_vers(index: number) {

    this.afficheur = index;
    this.valeur_tel = this.code + ' '+ this.telephone;
    console.log(this.valeur_tel);
    


  }

}
