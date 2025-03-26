import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../models/todo.model';
import { catchError, pipe, takeUntil } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todo',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todosService = inject(TodosService);
  serachTodo = signal('');

  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void {
    this.todosService
      .getTodosfromAPI()
      .pipe(
        catchError((error) => {
          console.error(error);
          throw error;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoItem(item: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
