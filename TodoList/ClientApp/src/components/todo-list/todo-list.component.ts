import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ServerRequest } from '../../services/server-request.service';
import { AppSettings } from '../../settings/appsettings';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.template.html'
})
export class TodoListComponent implements OnInit, OnChanges {
  @Input() todoList;
  @Input() completeList;

  constructor(private _server: ServerRequest, private _appSettings: AppSettings) {
  }

  ngOnInit() {
    this.todoList.forEach(element => {
      element.isEditing = false;
    });
  }

  getTableClass() {
    if (this.completeList == true) {
      return "thead-light";
    }
    return "thead-dark";
  }

  markComplete(todoItem: any) {
    todoItem.isComplete = true;

    this.updateItem(todoItem);
  }

  updateItem(todoItem: any) {
    todoItem.isEditing = false;

    this._server.post("api/Todo/update", todoItem).subscribe(
      response => {
        console.log(response);
        this.todoList = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  cancelUpdateItem(todoItem: any) {
    todoItem.name = this.todoList.filter(todos => todos.id === todoItem.id)[0].name;
    todoItem.isEditing = false;
    //this.todoList
  }
}
