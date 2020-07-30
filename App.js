'use strict';

function App() {
  console.log('test');
}

class todoItem {
  constructor(task) {
    this.task = task;
    this.taskDone = false;
  }

  changeTask(task) {
    this.task = task;
  }

  done() {
    this.taskDone = true;
  }

  undone() {
    this.taskDone = false;
  }

}

App();