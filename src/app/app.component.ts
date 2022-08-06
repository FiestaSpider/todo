import { Component } from '@angular/core';

type TodoData = {
  description: string,
  completed: boolean,
  date: string
};

class Todo {
  description = '';
  completed = false;
  date = '';
  isEditing = true;
  isNew = true;
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
      isEditing: false,
      isNew: false
    })
  ] as Todo[];
  showingCompleted = true;
  showingPending = true;
  get visibleTodos() {
    return this.todos.filter(todo => {
      return todo.isEditing || (todo.completed && this.showingCompleted) || (!todo.completed && this.showingPending);
    });
  }
  addTodo() {
    this.todos.push(new Todo());
  }
  cancelTodo(old: Todo) {
    old.isEditing = false;
  }
  updateTodo(old: Todo, next: TodoData) {
    Object.assign(old, next);
    old.isNew = false;
    old.isEditing = false;
  }
  copyTodo(old: Todo) {
    this.todos.push(Object.assign(new Todo(), old));
  }
}
