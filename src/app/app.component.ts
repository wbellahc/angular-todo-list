import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My To-Do List App';
}
