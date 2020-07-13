import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Task, task, priorityString, statusString } from '../task';

interface statusForSelect {
  value: statusString;
  display: string;
}
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  priorities: Array<priorityString>;
  statuses: Array<statusForSelect>;
  editedTask: Task;
  
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.priorities = ['low', 'normal', 'high'];
    this.statuses = [
      {
        value: 'todo',
        display: 'to do',
      },
      {
        value: 'inProgress',
        display: 'in progress',
      },
      {
        value: 'done',
        display: 'done',
      },
    ];
    console.log(data)
    this.editedTask = Object.assign({}, data)
  }
  
  ngOnInit(): void {}
}
