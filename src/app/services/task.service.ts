import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Task{

  id: number;
  name:string;
  completed:boolean;

}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[]= [
{id: 1, name: "Capitan America", completed:true},
{id: 2, name: "Black Panther", completed:true},
{id: 3, name: "Black Widow", completed:true},
{id: 4, name: "Iron Man", completed:true},
];
getTasks(): Observable<Task[]> {
  return of(this.tasks);
}
}


