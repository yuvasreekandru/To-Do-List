// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const date    =  document.querySelector('.date');

// date
let today = new Date();
date.innerText = today.toDateString();

// event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

// functions 

function addTodo(event){
// prevent default to submitting empty li
   event.preventDefault();
//creating  todo div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

// creating li in the todoDiv
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');

todoDiv.appendChild(newTodo);

// check mark button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// chek trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

// append to List
todoList.appendChild(todoDiv);

// clear input value
todoInput.value="";
}

// function for delete list item
function deleteCheck(e){
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    // check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
