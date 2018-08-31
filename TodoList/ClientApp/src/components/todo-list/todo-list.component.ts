import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServerRequest } from '../../services/server-request.service';
import { AppSettings } from '../../settings/appsettings';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.template.html'
})
export class TodoListComponent implements OnInit {
  @Input() todoList;
  @Input() isCompleteList;

  constructor(private _server: ServerRequest, private _appSettings: AppSettings) {
  }

  ngOnInit() {
    this.todoList.forEach(element => {
      element.isEditing = false;
    });
  }

  // Return a different CSS class based on whether this is the list of complete or incomplete items
  getTableClass() {
    if (this.isCompleteList == true) {
      return "thead-light";
    }
    return "thead-dark";
  }

  editTodoItem(todoItem: any) {
    if (!todoItem.isComplete) { // Don't allow the user to edit completed todo items.
      todoItem.isEditing = true;
    }
  }

  cancelEditTodoItem(todoItem: any) {
    // TODO: This function doesn't actually properly reset the item name to its original state.
    todoItem.name = this.todoList.filter(todos => todos.id === todoItem.id)[0].name;
    todoItem.isEditing = false;
  }

  markComplete(todoItem: any) {
    todoItem.isComplete = true;
    this.updateTodoItem(todoItem);
  }

  updateTodoItem(todoItem: any) {
    todoItem.isEditing = false;

    this._server.post("api/Todo/update", todoItem).subscribe(
      response => {
        this.todoList = response;
      },
      error => {
        console.log(error);
      }
    )
  }
}
