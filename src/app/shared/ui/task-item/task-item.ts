import { Component, input, output } from '@angular/core';
import { Task } from '../../../features/task/Task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})

export class TaskItem {
 
  //parametros de entrada
  task = input.required<Task>()

  //parametros de salida
  toggle  =  output<number>() //Estoo va emitir un  evento al padre para actualizar la tarea 
  removed  = output<number>()  //Estoo va emitir un  evento al padre para que elimine  la tarea 
 

}
