import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrl: './menunav.component.css'
})
export class MenunavComponent {
  @Output() botaoClicado = new EventEmitter<void>();

  onButtonClick() {
    this.botaoClicado.emit();
  }
}
