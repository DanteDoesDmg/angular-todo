import { Component, OnInit, Input } from '@angular/core';
import { Task, statusString } from '../task';
import { sortByDate, sortTasksByPriorityAndDate } from '../utils';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  typeStore: Object;
  listTypes: Array<statusString>;
  dateSortFlg = false;
  prioritySortFlg = true;
  isScreenSmall: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {
    this.listTypes = ['todo', 'inProgress', 'done'];
    this.typeStore = {
      todo: {
        title: 'To Do',
        connectedTypes: this.listTypes.filter((el) => el !== 'todo'),
      },
      inProgress: {
        title: 'In progress',
        connectedTypes: this.listTypes.filter((el) => el !== 'inProgress'),
      },
      done: {
        title: 'Done :)',
        connectedTypes: this.listTypes.filter((el) => el !== 'done'),
      },
    };
  }
  removeTask(task: Task) {
    this.taskList = this.taskList.filter((el) => el !== task);
  }
  dateSort() {
    if (!this.dateSortFlg) {
      this.taskList = sortByDate(this.taskList);
      this.dateSortFlg = true;
      this.prioritySortFlg = false;
    }
  }
  prioritySort() {
    if (!this.prioritySortFlg) {
      this.taskList = sortTasksByPriorityAndDate(this.taskList);
      this.dateSortFlg = false;
      this.prioritySortFlg = true;
    }
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
    } else {
      const draggedTask = event.previousContainer.data[event.previousIndex];
      draggedTask['status'] = <statusString>event.container.id;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (this.dateSortFlg) this.taskList = sortByDate(event.container.data);
      if (this.prioritySortFlg)
        this.taskList = sortTasksByPriorityAndDate(event.container.data);
    }
  }
  @Input() taskList: Array<Task>;
  @Input() type: string;
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1079px)'])
      .subscribe((result) => {
        this.isScreenSmall = result.matches;
      });
  }
}
