import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';

const routes: Routes = [
  {path:'', component:ListToDoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
