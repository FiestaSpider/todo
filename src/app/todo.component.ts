import { Component, Input, Output, EventEmitter } from '@angular/core';

type TodoData = {
  description: string,
  completed: boolean,
  date: string
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() description!: string;
  @Input() completed!: boolean;
  @Input() date!: string;
  @Output() todoUpdateEvent = new EventEmitter<TodoData>();
  @Output() todoCancelEvent = new EventEmitter();
  updateTodo() {
    const { description, completed, date } = this;
    this.todoUpdateEvent.emit({ description, completed, date });
  }
  cancelTodo() {
    this.todoCancelEvent.emit();
  }
}
