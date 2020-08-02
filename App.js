'use strict';

function App() {
  console.log('test');

  const todoList = new TodoList;

  const addTodoForm = document.querySelector('#add-todo-form');
  const inputTodoForm = document.querySelector('#input-todo');
  const todoListElement = document.querySelector('#todo-list');

  addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoItem = new TodoItem(inputTodoForm.value);
    todoList.add(todoItem);
    console.log(todoList.makeHTML());
    todoListElement.appendChild(todoList.makeHTML());
  });

}

class TodoList {
  constructor() {
    this.list = [];
  }

  /**
   * リストにtodoを追加
   * @param {TodoItem} todoItem 追加するtodo
   */
  add(todoItem) {
    this.list.push(todoItem);
  }

  /**
   * リストからtodoを削除
   * @param {TodoItem} todoItem 削除するtodo
   */
  delete(todoItem) {
    this.list = this.list.filter((item) => {
      return item !== todoItem;
    })
  }

  /**
   * リストからHTMLを作成して返す
   */
  makeHTML() {
    const ulElement = document.createElement('ul');
    this.list.forEach(todoItem => {
      const liElement = document.createElement('li');
      liElement.innerHTML = todoItem.task;
      ulElement.appendChild(liElement);
    });
    return ulElement;
  }
}

class TodoItem {
  /**
   * constructor
   * @param {String} task タスクの内容
   */
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