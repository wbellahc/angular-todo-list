import { Component, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() item!: TodoItem;
}
