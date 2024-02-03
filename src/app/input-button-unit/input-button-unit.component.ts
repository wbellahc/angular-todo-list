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

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
