import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private http:HttpClient){}
    todos:any;

    ngOnInit():void{
      this.todos = this.http.get("https://jsonplaceholder.typicode.com/todos/").subscribe(
        data => this.todos = data
      )
  }
}
