import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todoTasks: Array<Task>;
  inProgressTasks: Array<Task>;
  doneTasks: Array<Task>;
  constructor() {}
  @Input() taskList: Array<Task>;
  ngOnInit(): void {
    this.todoTasks = this.taskList.filter((el) => el.status === 'todo');
    this.inProgressTasks = this.taskList.filter(
      (el) => el.status === 'inProgress'
    );
    this.doneTasks = this.taskList.filter((el) => el.status === 'done');
  }
}
