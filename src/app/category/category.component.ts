import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  typeStore:Object
  constructor() {
    this.typeStore = {
      todo:{
       title: "To Do" 
      },
      inProgress:{
       title: "In progress" 
      },
      done:{
       title: "Done :)" 
      },
    }
  }
  @Input() taskList:Array<Task>
  @Input() type:string
  ngOnInit(): void {

  }
}
