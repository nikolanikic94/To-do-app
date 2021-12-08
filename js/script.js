// ADD something to do
function addTodo() {
    let inputTodo = document.getElementById('input-todo');
    let listOfTodos = document.querySelector('.todo-list__items');
    let li = document.createElement('li');

    if (inputTodo.value == '') {
        return;
    }

    listOfTodos.appendChild(li);
    li.innerHTML = `<label class="container">
                    <input type="checkbox" onchange="CheckTodo(this)">
                    <span class="checkmark"></span>
                    </label>
                    ${inputTodo.value} 
                    <img src="images/icon-cross.svg" onclick="deleteBtn(this)" alt="cross">`;
    li.classList.add('todo-list__item');

    document.getElementById('TodoForm').reset();
    numberOfLeft();
}

// DELETE one item to do

function deleteBtn(et) {
    let element = et;
    element.parentNode.remove();

    numberOfLeft();
}

// NUMBER of items left to do

function numberOfLeft() {
    let p = document.querySelector('.items-left');
    let listOfTodos = document.querySelectorAll('.todo-list__item');

    p.innerHTML = listOfTodos.length;
}

numberOfLeft();

// DONE items

function CheckTodo(check) {
    let checkbox = check;
    if (!checkbox.checked) {
        checkbox.parentNode.parentNode.classList.remove('line-through');
        checkbox.parentNode.parentNode.classList.add('todo-list__item');
    } if (checkbox.checked) {
        checkbox.parentNode.parentNode.classList.add('line-through');
        checkbox.parentNode.parentNode.classList.remove('todo-list__item');
    }
    
    numberOfLeft();
}

// CLEAR completed to dos

function clearCompleted() {
    let completed = document.querySelectorAll('.line-through');

    for (com of completed) {
        com.remove();
    }

    numberOfLeft();
}

// SHOW active to dos

function showActive() {
    let all = document.getElementById('all');
    let active = document.getElementById('active');
    let completedToDos = document.querySelectorAll('.line-through');
    let allToDos = document.querySelectorAll('.todo-list__item');

    all.classList.remove('active');
    completed.classList.remove('active');
    active.classList.add('active');

    for (toDo of completedToDos) {
        toDo.style.display = 'none';
    }

    for (toDo of allToDos) {
        toDo.style.display = 'block';
    }

    numberOfLeft();
}

// SHOW all to dos

function showAll() {
    let all = document.getElementById('all');
    let active = document.getElementById('active');
    let completed = document.getElementById('completed');
    let allToDos = document.querySelectorAll('.todo-list__item');
    let completedToDos = document.querySelectorAll('.line-through');

    all.classList.add('active');
    active.classList.remove('active');
    completed.classList.remove('active');

    for (toDo of allToDos) {
        toDo.style.display = 'block';
    }

    for (toDo of completedToDos) {
        toDo.style.display = 'block';
    }

    numberOfLeft();
}

// SHOW completed

function showCompleted() {
    let all = document.getElementById('all');
    let active = document.getElementById('active');
    let completed = document.getElementById('completed');
    let allToDos = document.querySelectorAll('.todo-list__item');
    let allActive = document.querySelectorAll('.line-through');

    all.classList.remove('active');
    active.classList.remove('active');
    completed.classList.add('active');

    for (one of allActive) {
        one.style.display = 'block';
    }

    for (toDo of allToDos) {
        toDo.style.display = 'none';
    }

    numberOfLeft();
}