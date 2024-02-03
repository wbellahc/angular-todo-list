import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  standalone: true,
  imports: [],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})

export class InputButtonUnitComponent {
  title = "Hello World";

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
}
