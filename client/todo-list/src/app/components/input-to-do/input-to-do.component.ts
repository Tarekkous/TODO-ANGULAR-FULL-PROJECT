import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-input-to-do',
  templateUrl: './input-to-do.component.html',
  styleUrls: ['./input-to-do.component.scss'],
})
export class InputToDoComponent implements OnInit {
  champsTodo!: string;
  searchBar!: FormGroup;
  allTodos!: any;
  allData!: any;
  constructor(private _todoService: TodoService, private fb: FormBuilder, private _router:Router) {}

  ngOnInit(): void {

    this.searchBar = this.fb.group({
      Search: [''],
    });

    this._todoService.getAllTodos().subscribe((value: any) => {
      this.allTodos = value;

      console.log('liste Todos', value);
    });
  }

  onSubmit() {
    const msg = this.searchBar.get('Search')?.value;
    console.log(msg);
    var message = { description: msg };
    this._todoService.postTodo(message).subscribe((data: any) => {
      try {
        console.log(data.rows);
        console.log(this.allTodos);
        this.allData = data.rows;
        window.location.href = "/"

        // this.champsTodo = JSON.stringify(data.rows[0].description);
      } catch (err: any) {
        console.log(err.message);
      }
    });

    // const filterItem = this.allTodos.forEach((todo: any) => {
    //   console.log(todo.description);
    // });
    console.log('iciiiiii', this.allTodos);
    // this.allTodos = this.allTodos.filter((todo: any) => filterItem == message);
    this.searchBar.get('Search')?.reset();

  };
}
