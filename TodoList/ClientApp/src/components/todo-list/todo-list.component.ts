import { Component, OnInit } from '@angular/core';
import { ServerRequest } from '../../services/server-request.service';
import { AppSettings } from '../../settings/appsettings';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.template.html'
})
export class TodoListComponent implements OnInit {
  todoList: any;

  constructor(private _server: ServerRequest, private _appSettings: AppSettings) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this._server.get("api/Todo").subscribe(
      response => {
        console.log(response);
        this.todoList = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  markComplete(todoItem: any) {
    todoItem.isComplete = true;

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
}
