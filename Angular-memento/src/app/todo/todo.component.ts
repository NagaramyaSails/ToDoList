import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoItem: string = '';
	todoItemsArray: any[] = [];
  doneItemsArray: any[] = [];
  todoObj: TodoItem;
  count: number;

  constructor() { }

  ngOnInit() {
    const localData = localStorage.getItem("todoItems");
		if(localData !== null) {
			this.todoItemsArray = JSON.parse(localData);
      this.count = this.todoItemsArray.length;
		}

  }


  onItemAdd() {
    console.log(this.count);
    var item = new TodoItem (this.count, this.todoItem, false);
		this.todoItemsArray.push(item);
		localStorage.setItem("todoItems", JSON.stringify(this.todoItemsArray));
		this.todoItem = '';
    console.log(this.todoItemsArray);
	}

  statusChange(id) {
      for(let item of this.todoItemsArray){
        if(item.id === id){
          item.done = !item.done;
        }
      }

    localStorage.setItem("todoItems", JSON.stringify(this.todoItemsArray));
    console.log("status change", this.todoItemsArray);
  }

}
