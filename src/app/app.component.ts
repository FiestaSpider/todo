import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [] as {
    description: string;
    completed: boolean;
    date: string;
    remove: () => void;
  }[];
  addTodo() {
    const todo = {
      description: '',
      completed: false,
      date: '',
      remove: () => {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }
    };
    this.todos.push(todo)
  }
}
