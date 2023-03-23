import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kamban-tasks',
  templateUrl: './kamban-tasks.component.html',
  styleUrls: ['./kamban-tasks.component.scss'],
})
export class KambanTasksComponent {
  todo = [
    'Aprender Animaciones en Angular',
    'Aprender a gestionar Angular CLI',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar bundle de Angular'
  ];

  done = [
    'Aprender Typescrip',
    'Aprender JS y ES',
    'Instalar Angula',
    'Configurar IDE',
    'Crear hola mundo en Angular',
    'Aprender a gestionar componentes en Angular',
    'Aprender a gestionar servicios en Angular',
    'Aprender a gestionar directivas en Angular',
    'Aprender a gestionar pipes en Angular',
    'Aprender a gestionar HTTP en Angular',
    'Aprender a gestionar Angular Materials y sus Schematics en Angular',
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
