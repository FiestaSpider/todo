import { Component } from '@angular/core';

class Todo {
  description = '';
  completed = false;
  date = '';
  editing = true;
  formatDate() {
    return new Date(this.date + ' 00:00:00').toLocaleDateString('es-MX', { dateStyle: 'full' });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    Object.assign(new Todo(), {
      description: 'Check in',
      completed: true,
      date: '2022-08-01',
      editing: false
    })
  ] as Todo[];
  addTodo() {
    this.todos.push(new Todo());
  }
  cancelTodo(old: Todo) {
    old.editing = false;
  }
  updateTodo(old: Todo, next: {
    description: string,
    completed: boolean,
    date: string
  }) {
    Object.assign(old, next);
    old.editing = false;
  }
}
