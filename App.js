'use strict';

function App() {
  console.log('test');
}

class todoList {
  constructor() {
    this.list = [];
  }

  /**
   * リストにtodoを追加
   * @param {todoItem} todoItem 追加するtodo
   */
  add(todoItem) {
    this.list.push(todoItem);
  }

  /**
   * リストからtodoを削除
   * @param {todoItem} todoItem 削除するtodo
   */
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

  /**
   * タスクを変更
   * @param {String} task 変更内容
   */
  changeTask(task) {
    this.task = task;
  }

  /**
   * タスクを完了した
   */
  done() {
    this.taskDone = true;
  }

  /**
   * タスクを未完了にする
   */
  undone() {
    this.taskDone = false;
  }

}

App();