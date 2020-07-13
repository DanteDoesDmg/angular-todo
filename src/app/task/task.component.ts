import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Input() task: Task;
  @Output() removeTaskEvent = new EventEmitter();
  ngOnInit(): void {}
  removeTask() {
    this.removeTaskEvent.emit(this.task);
  }
  openTaskDialog() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: this.task,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.date !== '-') {
          result.date = result.date.toLocaleDateString().replace(/\./g, '/');
        }
        this.task = <Task>result;
      }
    });
  }
}
