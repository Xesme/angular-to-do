import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
  <h1 id='id1'>To Do list for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <ul>
    <li *ngFor='let currentTask of tasks'>{{currentTask.description}}</li>
  </ul>
  <h2 (click)="guessColor()">Click here to guess your favorite color {{activeColor}}</h2>
  </div>
  `,
  styles: [
    `
    h1{
      color: red;
    }
    `
  ]
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  // color: string = 'green';
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course"),
    new Task("Begin brainstorming possible JavaScript group projects"),
    new Task("Add README file to last few Angular repos on Github")
  ];

  colors = ['green', 'red', 'blue', 'yellow', 'orange','purple'];
  activeColor: string;

  guessColor() {
    // this.activeColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    document.getElementById('id1').style.color = this.colors[ Math.floor(Math.random() * this.colors.length) ];

    // document.getElementById('id1').style.color = color;

  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}
