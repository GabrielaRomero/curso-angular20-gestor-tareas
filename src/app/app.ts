import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = "Gestor de Tareas";

  tarea = signal<Task[]>([
    { id:1, titulo:'Apprender Angular', completada:false},
    { id:2, titulo:'Construir un proyecto nuevo', completada:false},
    { id:3, titulo:'Dominar signals', completada:true}

]);

totalTareas = computed(() => this.tarea().length);
completadas = computed(() => this.tarea().filter(t => t.completada).length);
pendientes = computed(() => this.totalTareas() - this.completadas());

agregarTarea(titulo: string) {
  const limpio = titulo.trim();
  if (!limpio) {
    return;
  }

  this.tarea.update(lista => [...lista,
     { id: Date.now(), titulo: limpio, completada: false }
  ]);
}

tuggle(id:number): void {
  this.tarea.update(lista => 
    lista.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
}



//boton de eliminar . eliminar una tarea en especifico
eliminarTarea(id:number): void {
  this.tarea.update(lista => lista.filter(t => t.id !== id));
}


}


