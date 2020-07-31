'use strict';

function App() {
  console.log('test');
}

class todoList {
  constructor() {
    this.list = [];
  }

  add(todoItem) {
    this.list.push(todoItem);
  }

  delete(todoItem) {
    this.list = this.list.filter((item) => {
      return item !== todoItem;
    })
  }
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