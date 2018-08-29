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
  }

  

  createTodo() {
    let newItem = {
      name: "Test Desc",
      isComplete: false
    }

    this._server.post("api/todo/add", newItem).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }
}
