import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  allTodos!: any;
  editApi:string='http://localhost:4000/todos/';
  inputEdit!:FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dataTodo: any, private _todoService: TodoService, private _dialogRef:MatDialogRef<any>, private _http:HttpClient, private fb:FormBuilder) {}



  ngOnInit(): void {
    //données reçus de la modale
    console.warn(this.dataTodo);

    this._todoService.getAllTodos().subscribe((todo: any) => {
      this.allTodos = todo;
    });

    this.inputEdit = this.fb.group({
      editSpace: [''],
    });

  };

  onEdit(id:any ,value:any){
    const inputValue = this.inputEdit.get('editSpace')?.value;
    console.warn(inputValue);
    const item = {description:inputValue}
    console.log(id);
    this._http.put(this.editApi+ id  , value = item).subscribe();
    // this._dialogRef.close(inputValue);
    this._dialogRef.close();
    window.location.href = "/"

  };

  onCloseModal(){
    this._dialogRef.close();
  };
}
