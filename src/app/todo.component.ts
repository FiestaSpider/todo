import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() description!: string;
  @Input() completed!: boolean;
  @Input() date!: string;
  @Output() todoUpdateEvent = new EventEmitter<{
    description: string,
    completed: boolean,
    date: string
  }>();
  @Output() todoCancelEvent = new EventEmitter();
  cancelTodo() {
    this.todoCancelEvent.emit();
  }
  updateTodo() {
    const { description, completed, date } = this;
    this.todoUpdateEvent.emit({ description, completed, date });
  }
}
