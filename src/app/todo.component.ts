import { Component, Input } from '@angular/core';

function Noop() {}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() description = '';
  @Input() completed = false;
  @Input() date = '';
  @Input() remove = Noop;
}
