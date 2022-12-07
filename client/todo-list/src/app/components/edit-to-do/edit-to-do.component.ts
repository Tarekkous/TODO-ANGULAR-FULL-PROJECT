import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { EditComponent } from 'src/app/modals/edit/edit.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.scss']
})
export class EditToDoComponent implements OnInit {
allTodos!:any;
  constructor(private _dialog:MatDialog, private _todoService:TodoService) { }

  ngOnInit(): void {
    this._todoService.getAllTodos().subscribe((todo:any)=>{
      this.allTodos = todo;
    })
  };

  // onOpenModal(todo:any):void{
  //   const modal = this._dialog.open(EditComponent,{
  //     width: '300px',
  //     height : '200px',
  //     enterAnimationDuration: '800ms',
  //     exitAnimationDuration: '800ms',
  //     data:todo

  //   })
  // }
}
