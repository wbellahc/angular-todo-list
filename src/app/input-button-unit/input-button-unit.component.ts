import { Component } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})

export class InputButtonUnitComponent {
  title = "Hello World";

  constructor() {
    setTimeout(() => {
      this.title = 'This is not the title you are looking for';
    }, 3000);
  }
}
