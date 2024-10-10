Creando mi proyecto con componentes y observables

empecé creando la aplicación llamada "my-app" componente de listas y service de "task-service"

Exporté mi clase ListasComponentes

creando un constructor privado taskService:

anexo codigo:
  ngOnInit(): void {
      
    this.tasks$=this.taskService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.completed)),
      map(tasks => tasks.map(task => ({
        ...task,
        name: task.name.toUpperCase()

y en el archivo task.service.ts
codigo de las listas:
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
