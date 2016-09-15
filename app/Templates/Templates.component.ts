import {Component } from '@angular/core';
import {TemplatesServices} from './Templates.Services';

@Component({
   moduleId: module.id,
   selector:'teste-templates',
  /*template:`
  <h3>ListaDeNumeros{{variavel}}</h3>
   <ul>
     <li  *ngFor="let numeros of ListaDeNumeros">
        {{numeros}}
     </li>
   </ul>*/
   templateUrl:'Templates.html',
   providers:[TemplatesServices]
})
export class TemplatesComponent{
 variavel = 'Testando variavel (templates e Lista(foreach)';
 listaDeNumeros;

 constructor(templatesService: TemplatesServices){
   this.listaDeNumeros = templatesService.getNumeros();
 }
}
