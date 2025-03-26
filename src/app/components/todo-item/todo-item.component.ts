import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todoToggle = output<Todo>();

  handleTodoToggleAction() {
    this.todoToggle.emit(this.todo());
  }
}
