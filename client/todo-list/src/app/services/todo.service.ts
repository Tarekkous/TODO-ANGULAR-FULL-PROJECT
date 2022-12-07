import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

apiInput:string='http://localhost:4000/todos';
deleteApi:string='http://localhost:4000/todos/:id';

  constructor(private _http:HttpClient) { }

postTodo(data:any):Observable<any>{
  return  this._http.post(this.apiInput, data);
}
getAllTodos():Observable<any>{
  return this._http.get(this.apiInput);
}
// onDelete():Observable<any>{
//   return this._http.delete(this.deleteApi)
// }


}
