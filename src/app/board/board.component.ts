import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { sortTasksByPriorityAndDate } from '../utils';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todoTasks: Array<Task>;
  inProgressTasks: Array<Task>;
  doneTasks: Array<Task>;
  constructor(public dialog: MatDialog) {}
  @Input() taskList: Array<Task>;

  openTaskDialog() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: {
        name: '',
        date: '',
        priority: 'normal',
        status: 'todo',
        description: '',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.date !== '') {
          result.date = result.date.toLocaleDateString().replace(/\./g, '/');
        }
        const newTask = new Task(result);
        switch (newTask.status) {
          case 'inProgress':
            this.inProgressTasks.push(newTask);
            this.inProgressTasks = sortTasksByPriorityAndDate(
              this.inProgressTasks
            );
          case 'done':
            this.doneTasks.push(newTask);
            this.doneTasks = sortTasksByPriorityAndDate(this.doneTasks);
          default:
            this.todoTasks.push(newTask);
            this.todoTasks = sortTasksByPriorityAndDate(this.todoTasks);
        }
      }
    });
  }

  ngOnInit(): void {
    this.todoTasks = this.taskList.filter((el) => el.status === 'todo');
    this.inProgressTasks = this.taskList.filter(
      (el) => el.status === 'inProgress'
    );
    this.doneTasks = this.taskList.filter((el) => el.status === 'done');
  }
}
