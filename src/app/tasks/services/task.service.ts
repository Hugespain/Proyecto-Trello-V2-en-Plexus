// import { Injectable } from '@angular/core';
// import { environments } from '../../../environments/environments';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Task } from '../interfaces/task.interface';

// @Injectable({providedIn: 'root'})
// export class TasksService {
//   private baseUrl: string = environments.baseUrl;

//   constructor(private http: HttpClient) {}

//   getTasks(): Observable<Task[]> {
//   return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
//   }
// }


// import { Injectable } from '@angular/core';
// import { environments } from '../../../environments/environments';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Task } from '../interfaces/task.interface';

// @Injectable({providedIn: 'root'})
// export class TasksService {
//   private baseUrl: string = environments.baseUrl;

//   constructor(private http: HttpClient) {}

//   getTasks(): Observable<Task[]> {
//   return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
//   }
// }

import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  // Crear una nueva tarea
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/tasks`, task);
  }

  // Actualizar una tarea existente
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/tasks/${task.id}`, task);
  }

  // Eliminar una tarea
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/tasks/${id}`);
  }
}
