import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from 'src/app/modals/edit/edit.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent implements OnInit {

  allTodos!:any;
  deleteApi:string='http://localhost:4000/todos/';
  newDescription!:any;
  editNew:boolean = false;
  constructor(private _todoService:TodoService, private _http:HttpClient, private _dialog:MatDialog) { }

  ngOnInit(): void {
    this._todoService.getAllTodos().subscribe((value:any)=>{
      this.allTodos = value
      localStorage.setItem('dataSource', JSON.stringify(this.allTodos));

    });
  };
  onOpenModal(todo:any):void{
    const modal = this._dialog.open(EditComponent,{
      width: '300px',
      height : '200px',
      enterAnimationDuration: '800ms',
      exitAnimationDuration: '800ms',
      data:todo

    });
    modal.afterClosed().subscribe((data:any)=>{
      this.newDescription = data
      console.warn(this.newDescription);
      this.editNew = true;
    })
  };

  deleteTodo(id:string){
    this._http.delete(this.deleteApi + id )
    .subscribe();
    console.warn(id , 'has been deleted');
    this.allTodos = this.allTodos.filter((todo:any) => todo.todo_id !== id)
  };



};
