import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './features/task/Task';
import { TaskStore } from './features/task/task-store';
import { TaskItem } from './shared/ui/task-item/task-item';
import { TaskForm } from './shared/ui/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskItem, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = "Gestor de Tareas";

  store = inject(TaskStore);


}
  