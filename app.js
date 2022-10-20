let itemList = document.getElementById('todos');
let itemClass = document.getElementsByClassName('todo-item');
const array = Object.values(itemClass);


let todoItems = [];

function renderTodo(todo) {
    const list = document.querySelector('.list-group');

    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
        item.remove();
        return
    }

    console.log(item, "item")

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);

    

    node.innerHTML = `
    <input id="${todo.id}" class="js-tick" type="checkbox"/>
    <label for="${todo.id}" class="tick"></label>
    <span>${todo.text}</span>
    <button class="delete js-delete-todo">X
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
      list.replaceChild(node, item);
  } else {
      list.append(node);
  }
}


let text = document.getElementsByClassName('list-group');

function addTodo(text) {
    const todo = {
        text,
        id: Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
} 


const form = document.querySelector('.form-inline');

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.form-control');

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});


const list = document.querySelector('.list-group');
const checkedClass = document.getElementsByClassName("todo-item")
list.addEventListener('click', event => {
    console.log((checkedClass), "????????")
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    
    toggleDone(itemKey);
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});

function deleteTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
      deleted: true,
      ...todoItems[index]
    };
    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
}

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
        checked: false,
        ...todoItems[index]
    };
    if (todo.checked === false) {
        todo.text = 'new input'
        console.log(todo)
    }
}












// const listArray = [];
// const list = document.getElementById("todos");
// const listItem = document.getElementsByClassName("item-list");
// const input = document.getElementById("form");
// const button = document.getElementById("additem");
// const clear = document.getElementById('clean');

// function display() {
//   listArray.map((data, idx) => (
//   list.innerHTML += `<li class="item-list">
//     <input type="checkbox" class="checkbox" onclick="strike(${idx})">
//     <span class="text">${data}</span>
//     <button class="delete" id="clean" onclick="removeItem(${idx})">X</button>
//     </li>
//     `
//   ))
// }

// button.addEventListener("click", addItem);
// // deleteButton.addEventListener('click', removeItem);

// function addItem(e) {
//   e.preventDefault();
//   listArray.push(input.value);
//   display();
//   input.value = "";
// }

// clear.addEventListener('click', removeItem);

// function removeItem(e){
//   if(e.target.className.contains('delete')){
//     let li = e.target.parentElement;
//     clear.removeChild(li);
//   }
// }

// function removeItem(idx) {
//   console.log("got clicked", idx)
//   if(e.target.classList.contains('delete')){
//         let li = e.target.parentElement;
//         itemList.removeChild(li);
//     }
// }

// // function strike(idx) {
  
// //   console.log("got clicked", idx)
// //   // if(e.target.classList.contains('button')){
// //   //       let li = e.target.parentElement;
// //   //       itemList.removeChild(li);
// //   //   }
// // }






































































































































