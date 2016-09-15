import {Injectable } from '@angular/core';

@Injectable()
export class TemplatesServices{

/*SOMENTE EXEMPLO, PODERIAM SER MATRICULAS OU NOMES POR EXEMPLO*/
  getNumeros(){
    return ['1','2','3','4','5','6'];
  }
}
