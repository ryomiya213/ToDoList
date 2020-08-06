'use strict';

function App() {

  const todoList = new TodoList;

  const addTodoForm = document.querySelector('#add-todo-form');
  const inputTodoForm = document.querySelector('#input-todo');
  const todoListElement = document.querySelector('#todo-list');


  addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoItem = new TodoItem(inputTodoForm.value);
    todoList.add(todoItem);
    inputTodoForm.value = '';
    renderTodoListElement();
  });


  /**
   * TODOリストの表示を更新
   */
  function renderTodoListElement() {
    const newUlElement = document.createElement('ul');
    newUlElement.setAttribute('id', 'ul-list');
    todoList.list.forEach(todoItem => {
      const liElement = document.createElement('li');
      const inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'checkbox');
      inputElement.setAttribute('id', todoItem.index);
      inputElement.setAttribute('class', 'done');
      if (todoItem.taskDone) {
        inputElement.setAttribute('checked');
      }

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '削除';
      deleteButton.setAttribute('class', 'delete');
      liElement.innerHTML = `${inputElement.outerHTML} ${todoItem.task} ${deleteButton.outerHTML}`;
      
      // checkbox 後で修正
      liElement.querySelector('.done').addEventListener('change', () => {
        todoItem.taskDone = !todoItem.taskDone;
        console.log(todoItem.taskDone);
      });

      liElement.querySelector('.delete').addEventListener('click', () => {
        todoList.delete(todoItem);
        renderTodoListElement();
        console.log(todoList.list)
      });


      newUlElement.appendChild(liElement);
      
    });
    while (todoListElement.firstChild) {
      todoListElement.removeChild(todoListElement.firstChild);
    }


    todoListElement.appendChild(newUlElement);

  }
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
    });
  }

}

let todoIndex = 0;
class TodoItem {
  /**
   * constructor
   * @param {String} task タスクの内容
   */
  constructor(task) {
    this.index = todoIndex++;
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