import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
  <h1> Todo App </h1>
  <div>
    <label>Task</label>
    <input [(ngModel)]="task" />
    <button (click)="saveTask()">Save</button>
  </div>
  <hr>
  @if(showEditTaskForm)
  {
    <div>
      <label>Update Work</label>
      <input [(ngModel)]="editTask" />
      <button (click)="updateTask()">Update</button>
    </div>
  }
  <div>
    <ul>
      @for(task of taskList; track task)
      {
        <li>
          {{ 'Index: ' + $index + ' Task: ' + task }}
          
        @if(!showEditTaskForm)
        {
          <button (click)="getTask($index)">Edit</button>
          <button (click)="deleteTask($index)">Delete</button> 
        }
        </li>
      }
    </ul>
  </div>
  `
})
export class App {

  // properties
  task: string = "";

  taskList: string[] = [];

  editTask: string = "";
  editTaskId: number = 0;

  showEditTaskForm: boolean = false;

  // methods
  saveTask () {
    // add the task to the taskList
    this.taskList.push(this.task);
    this.task = "";
  }

  deleteTask (index: number) {
    // remove the task from taskList
    this.taskList.splice(index, 1);
  }

  getTask (index: number) {
    this.editTask = this.taskList[index];
    this.editTaskId = index;
    this.showEditTaskForm = true;
  }

  updateTask () {
    this.taskList[this.editTaskId] = this.editTask;
    this.showEditTaskForm = false;
  }
}
