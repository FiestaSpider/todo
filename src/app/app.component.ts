import { Component } from '@angular/core';

type TodoData = {
  description: string,
  completed: boolean,
  date: string
};

function textToDate(text: string) {
  return new Date(text + ' 00:00:00');
}

class Todo {
  description = '';
  completed = false;
  date = '';
  isEditing = true;
  isNew = true;
  formatDate() {
    return textToDate(this.date).toLocaleDateString('es-MX', { dateStyle: 'full' });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [] as Todo[];
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
  export() {
    const json = JSON.stringify(this.todos.map((todo) => {
      return { completed: todo.completed, description: todo.description, date: textToDate(todo.date).toJSON() }
    }));
    const blob = new Blob([json], {type: "octet/stream"});
    const url = URL.createObjectURL(blob);
    const element = document.getElementById('export') as HTMLAnchorElement;
    element.href = url;
    element.click();
    URL.revokeObjectURL(url);
  }
}
