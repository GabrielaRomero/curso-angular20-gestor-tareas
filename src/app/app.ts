import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './features/task/Task';
import { TaskStore } from './features/task/task-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = "Gestor de Tareas";

  store = inject(TaskStore);















}
