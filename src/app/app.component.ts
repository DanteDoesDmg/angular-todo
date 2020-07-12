import { Component } from '@angular/core';
import { Task } from './task';

const task1 = new Task({
  name: 'zadanie 1',
  description: 'Priorytet niski, status in progress',
  status: 'inProgress',
  priority: 'low',
});
const task2 = new Task({
  name: 'zadanie 2',
  description: 'Priorytet Wysoki, status todo',
  status: 'done',
  priority: 'high',
});
const task3 = new Task({
  name: 'zadanie 1',
  description: 'dafaulty z datą',
  date: '12/04/20',
});
const task4 = new Task({
  name: 'zadanie 1',
  description: 'dafaulty z datą',
  date: '12/04/20',
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo';
  taskList = [task1, task2, task3, task4,task1,task1,task1,task1,task1,task1,task1,task1,task1,task1,task1,task1,];
}
