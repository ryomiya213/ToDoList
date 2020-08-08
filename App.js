'use strict';

function App() {

  const todoList = new TodoList;

  const addTodoForm = document.querySelector('#add-todo-form');
  const inputTodoForm = document.querySelector('#input-todo');
  const todoListElement = document.querySelector('#todo-list');


  addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputTodoForm.value !== '') {
      const todoItem = new TodoItem(inputTodoForm.value);
      todoList.add(todoItem);
      inputTodoForm.value = '';
      renderTodoListElement();
    }
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

      const changeButton = document.createElement('button');
      changeButton.innerHTML = '変更';
      changeButton.setAttribute('class', 'change');

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '削除';
      deleteButton.setAttribute('class', 'delete');

      // タスク完了で打ち消し線を追加する
      if (todoItem.taskDone) {
        console.log('checked');
        const todoItemElement = document.createElement('s');
        todoItemElement.innerHTML = todoItem.task;
        liElement.innerHTML = `${inputElement.outerHTML} ${todoItemElement.outerHTML} ${changeButton.outerHTML} ${deleteButton.outerHTML}`;
      } else {
        liElement.innerHTML = `${inputElement.outerHTML} ${todoItem.task} ${changeButton.outerHTML} ${deleteButton.outerHTML}`;
      }
      
      liElement.querySelector('.done').addEventListener('change', () => {
        todoItem.taskDone = !todoItem.taskDone;
        console.log(todoItem.taskDone);
        renderTodoListElement();
      });

      liElement.querySelector('.change').addEventListener('change', () => {
        //
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