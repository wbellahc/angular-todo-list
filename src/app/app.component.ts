import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputButtonUnitComponent,
    CommonModule,
    TodoItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
