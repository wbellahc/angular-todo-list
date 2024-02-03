import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from '../input-button-unit/input-button-unit.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-list-manager',
  standalone: true,
  imports: [
    CommonModule, 
    InputButtonUnitComponent, 
    TodoItemComponent
  ],
  templateUrl: './list-manager.component.html',
  styleUrl: './list-manager.component.scss'
})
export class ListManagerComponent {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string): void {
    this.todoList.push({ title: title });
  }
}
