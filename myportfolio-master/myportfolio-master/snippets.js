
      this.allbtn = createLMNT('button', 'button', 'allbtn', 'All.', '');
      this.allbtn.onTouch('allbtn', this.listTodos());
      this.actbtn = createLMNT('button', 'button', 'actbtn', 'Active.', '');
      this.actbtn.onTouch('actbtn', this.listActive());
      this.donebtn = createLMNT('button', 'button', 'donbtn', 'Done.', '');
      this.donebtn.onTouch('donebtn', this.listDone());


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
