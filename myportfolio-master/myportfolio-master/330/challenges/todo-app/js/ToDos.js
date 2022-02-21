import * as ls from "./ls.js";
import * as util from "./utilities.js";

let todoList = [];
const LSkey = 'items';
const parentEl = util.qs('todos');

export default class ToDos {
  // a class needs a constructor
  constructor(parentId) {
    this.parentId = parentId;
    console.log(parentId);
    this.todoList = [];
    this.error = error;
    util.onTouch('#addbtn', this.addTodo);
    util.onTouch('#allbtn', this.listAll);
    util.onTouch('#actbtn', this.listActive);
    util.onTouch('#donebtn', this.listDone);
  }

  addTodo() {
    this.error = '';
    // set blank error field
      util.qs("#error").innerText = this.error;
    // grab task from input field
    const task = util.qs("#addinput").value;
    if (!task.length > 0) {
      this.error = 'Item cannot be blank, please enter your task.';
      util.qs("#error").innerText = this.error;
    } else {
      saveTodo(task, 'items');
    }
    this.todoList = getTodos('items', null);
    console.log(this.todoList);
    this.listAll();
  }

  listAll() {
    this.todoList = getTodos(LSkey);
    renderTodoList(this.todoList);
    this.itemsLeft();
  }

  listActive() {
    this.todoList = getTodos(LSkey);
    renderTodoList(this.todoList.filter(el => el.done === false));
    this.itemsLeft();
  }

  listDone() {
    this.todoList = getTodos(LSkey);
    renderTodoList(this.todoList.filter(el => el.done === true));
    this.itemsLeft();
  }

  removeTodo(id) {
    deleteItem(id);
    this.listAll();
  }

  // Mark selected item as completed
  markItemDone = (id) => {
    this.todoList = getTodos(LSkey);
    this.todoList.forEach(item => {
      if (item.id === id) {
      item.done = true;
      console.log(item);
      }
    });
    //ls.writeToLS(lskey, JSON.stringify(this.todoList));
    this.listAll();
  };

  // function to show how many items are left undone in the todo list
  itemsLeft() {
    let itemcount = this.todoList.length;
    console.log(itemcount);
    let t;
    if (itemcount === 1) {
      t = ' task ';
    } else if (itemcount > 1) {
      t = ' tasks '
    }
    util.qs("#tasks").innerHTML = `${itemcount} ${t} left`;
  }
}

/***** END OF CLASS *****/

/*
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
A todo should look like this: { id : timestamp, content: string, completed: bool }
*/

function saveTodo(task) {
  todoList = getTodos(lskey, null);
  console.log('todoList: ' + todoList);
  // build todo object
  const todo = { id: Date.now(), task: task, done: false };
  // add obj to todoList
  todoList.push(todo);
  console.log('todoList: ' + todoList);
  // save JSON.stringified list to ls
  ls.writeToLS(lskey, JSON.stringify(todoList));
  console.log('todo added!');
}

function renderTodoList(renderlist) {
    //console.log('top of renderTodoList, parentId: ' + parentId);
    // build new display
    const parentEl = util.qs('#todos');
    parentEl.innerText = '';
    //console.log(parentEl);
    //console.log(renderlist);
    renderlist.forEach((field) => {
      // create new list item
      //            createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
      let item = util.createLMNT('li', '', field.id, '', 'listitem bordered item-row');
      let itemtext = util.createLMNT("p", "", "", field.task, "todo-text");
      let markbox = util.createLMNT('label', `label${field.id}`, '', '', 'bordered markbtn');
      markbox.setAttribute('name', `label${field.id}`);
      let markbtn = util.createLMNT("input", "checkbox", `mark${field.id}`, "", "markbtn");
      let delbtn = util.createLMNT("button", "", `del${field.id}`, "X", "delbtn");
    //console.log(item);
    markbtn.addEventListener("click", markDone(field.id));
      //console.log(`#del${field.id}`);
      //console.log(field.id)
      //util.onTouch(`#del${field.id}`, deleteItem(field.id));
      //util.onTouch(`#mark${field.id}`, markDone(field.id));

      if (field.done === true) {
        itemtext.classList.add("scratch");
        markbtn.classList.add('markbtnX');
      }
      markbox.appendChild(markbtn);
      item.appendChild(markbox);
      item.appendChild(itemtext);
      item.appendChild(delbtn);
      //console.log('bottom of renderTodoList, parentEl: ' + parentEl);
      parentEl.appendChild(item);
    });
}

function markDone(id) {
    todoList = getTodos(LSkey);
    todoList.forEach(item => {
      if (item.id === id) {
        console.log('item: ' + item);
        item.done = true;
        console.log('item: ' + item);
      }
    });
    //ls.writeToLS('items', JSON.stringify(todoList));
    //markItemDone('items', id);
    console.log('todoList: ' + todoList);
}

function deleteItem(id) {
  //console.log("todoList: " + todoList);
  // get the index of the item with this id
  const gotindex = todoList.findIndex((todo) => todo.id === id);
  // set the boolean to true for this list item
  //todoList[gotindex] = { id: todo.id, task: todo.task, done: true };
  // add obj to todoList
  todoList.splice( gotindex, 1 );
  // save JSON.stringified list to ls
  //ls.writeToLS('items', JSON.stringify(todoList));
}

function getTodos(lskey) {
  let tasklist = JSON.parse(ls.readFromLS(lskey)) || [];
    return tasklist;
}

export { saveTodo, renderTodoList, getTodos, markDone, deleteItem };