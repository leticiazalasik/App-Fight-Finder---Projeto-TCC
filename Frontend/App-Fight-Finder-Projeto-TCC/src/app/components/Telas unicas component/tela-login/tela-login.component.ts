import { Component, Input } from '@angular/core';
import { Escola } from '../../interfaces/Escola';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {

  @Input() escola: Escola | null = null;

 


}

