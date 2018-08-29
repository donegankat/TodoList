import { Component } from '@angular/core';
import { ServerRequest } from '../services/server-request.service';
import { AppSettings } from '../settings/appsettings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Simple Todo';

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

  getComplete(getCompleteItems: boolean) {
    return this.todoList.filter(todoItem => todoItem.isComplete === getCompleteItems);
  }

  createTodo() {
    let newItem = {
      name: "[Click to Edit]",
      isComplete: false
    }

    this._server.post("api/todo/add", newItem).subscribe(
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
