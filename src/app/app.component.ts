import { Component } from '@angular/core';
import { Task } from './task';

//Dane testowe
const task1 = new Task({
  name: 'zadanie 1',
  description: 'Opis zadania',
  status: 'inProgress',
  priority: 'low',
});
const task2 = new Task({
  name: 'zadanie 2',
  description: 'Tutaj też opis zadania',
  status: 'done',
  priority: 'high',
});
const task3 = new Task({
  name: 'zadanie 3',
  description: 'O, a tutaj jest opis zadania',
  date: '12/09/2020',
});
const task4 = new Task({
  name: 'zadanie 4',
  description: 'Nie taki zły ten angular',
  date: '12/08/2020',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo';
  taskList = [task1, task2, task3, task4];
}
