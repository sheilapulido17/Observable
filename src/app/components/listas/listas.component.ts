import { Component,OnInit } from '@angular/core';
import { TaskService,Task  } from '../../services/task.service';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})

export class ListasComponent implements OnInit{
  tasks$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
      
    this.tasks$=this.taskService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.completed)),
      map(tasks => tasks.map(task => ({
        ...task,
        name: task.name.toUpperCase()
      })))
    );
  }

}
