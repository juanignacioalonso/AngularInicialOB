import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

//Importamos El modelo de ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kamban-tasks',
  templateUrl: './kamban-tasks.component.html',
  styleUrls: ['./kamban-tasks.component.scss'],
})
export class KambanTasksComponent {

  todoTask:ITask[]=[
    {
      title:'Animaciones',
      description:'Aprender Animaciones en Angular',
      completed:false,
      level:LEVELS.INFO
    },
    {
      title:'Angular CLI',
      description:'Aprender comandos y configuraciones de Angular',
      completed:false,
      level:LEVELS.URGENT
    },
    {
      title:'Build',
      description:'Aprender a generar bilds de Angular CLI',
      completed:false,
      level:LEVELS.BLOCKING
    },
    {
      title:'Deploy',
      description:'Aprender a desplegar bundles en firebase',
      completed:false,
      level:LEVELS.BLOCKING
    },
  ];

  doneTask:ITask[]=[
    {
      title:'Configuracion IDE',
      description:'Configurar e instalar plugins en Visual Studio Code',
      completed:true,
      level:LEVELS.URGENT
    },
    {
      title:'Instalar Angular',
      description:'Instalar con npm Angular CLI de forma global',
      completed:true,
      level:LEVELS.BLOCKING
    },
    {
      title:'Hola Mundo',
      description:'Crear con Angular CLI un proyecto inicial',
      completed:true,
      level:LEVELS.URGENT
    },
    
  ];


  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      console.log('Misma columna: ',event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      //Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed=!event.previousContainer.data[event.previousIndex].completed

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
