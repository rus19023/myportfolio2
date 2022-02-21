//   console.log(numbers.filter(x => x%2 === 0 ));

const footerText = (footer) => `Hello ${footer}`;
const footertext = footerT("Ada");


// createLMNT(LMNT, LMNTtype, LMNTid, LMNTtext, LMNTclass)
this.addbtn = createLMNT('button', 'button', 'addbtn', '+', '');
this.allbtn = createLMNT('button', 'button', 'allbtn', 'All.', '');
this.actbtn = createLMNT('button', 'button', 'actbtn', 'Active.', '');
this.donbtn = createLMNT('button', 'button', 'donbtn', 'Done.', '');

function onTap(event) {
    // If delete button is clicked/tapped, remove the todo from the local storage
    console.log(`event: ${event}`);
    if ((event.target.id === 'delbtn')) {
      util.onTouch(event.currenttarget.id, ls.removeFromLS(this.id));
    }
    // If mark button is clicked/tapped, mark the done boolean as true
    if ((event.target.id === 'markbtn')) {
      util.onTouch(event.target.id, ls.markDone(this.id));
    }
    // If the add item is clicked/tapped, create a new local storage item
    if ((event.target.id === 'addbtn')) {
        // get the value of the input field
      let task = document.getElementById('addinput').value;
      console.log(`task: ${task}`);
      util.onTouch(event.target.id, ls.createItem('items', Date.now(), task, false));
    }
    // If the active button is clicked/tapped, show all active todos
    if ((event.target.id === 'actbtn')) {
      util.onTouch(event.target.id, this.showActive());
    }
    // If the all button is clicked/tapped, show all todos
    if ((event.target.id === 'allbtn')) {
      util.onTouch(event.target.id, this.showAll('list', ls.getAllItems()));
    }
    // If the done button is clicked/tapped, show all done todos
    if ((event.target.id === 'donbtn')) {
      util.onTouch(event.target.id, this.showDone());
    }
  }



//   const key = Object.keys(localStorage).find(key => key.includes(lskey));
//   console.log(`key: ${key}`);
//   if (key) {
//     let thiskey = localStorage.getItem(key);
//     tasklist.push(JSON.parse(window.localStorage.getItem(thiskey)));
//   }
//   //const tasks = JSON.parse(ls.readFromLS(key));
//   console.log(tasklist);
//   return tasklist;


                      //                                \/
let markbtn = util.createLMNT("button", "", "markbtn", "✕", "bordered todo-buttons");


  // get the index of the item with this id
  const gotindex = todoList.findIndex((todo) => todo.id === id);
  // set the boolean to true for this list item
  //todoList[gotindex] = { id: todo.id, task: todo.task, done: true };
  // add obj to todoList
  todoList.splice( gotindex, 1 );


  // Mark selected item as completed
  markDone = (lskey, id) => {
    todoList = getTodos(lskey);
    list.forEach(item => {
        if (item.id === id) {
        item.done = true;
        }
    });
    writeToLS(key, list);
  };


  
    // get the item's checked status
    let checkitem = util.qs(`#${id}`);
    console.log(checkitem);
    let isChecked = checkitem.value;
    console.log(isChecked);
    if ((checkitem.isChecked) && checkitem.done === false) {
      console.log(checkitem.done);
      checkitem.done = true;
      console.log(checkitem.done);
    }
    if ((!checkitem.isChecked) && checkitem.done === true) {
      console.log(checkitem.done);
      checkitem.done = false;
      console.log(checkitem.done);
    }


    
    console.log(`#mark${currentTarget.getAttribute("id")}btn`);

    
    util.onTouch(`#${this.parentId}`, this.checkBtn);
  
  util.onTouch(`#${markbtn.getAttribute("id")}`, markDone(field.id));
  util.onTouch(`#${delbtn.getAttribute("id")}`, deleteItem(field.id));

  /*

document.getElementById("link").addEventListener('click', function(e) {
   e.preventDefault(); // Cancel the native event
   e.stopPropagation();// Don't bubble/capture the event any further
});

*/