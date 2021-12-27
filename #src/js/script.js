const todo = document.querySelector('.todo__header');
console.log(todo);
const checkboxListId = [];

async function getTodos() {
    const todos = [];
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todoList = await response.json();
    todoList.map(item => todos.push(item));
    if (todos.length != 0) console.log(todos);
    todos.map((item) => {
            if (item.userId == 1) {
                todo.insertAdjacentHTML(`afterend`, `
                    <div class="todo__item item">
                <input type="checkbox" id='${item.id}' class="item__checkbox" name="checkbox">
                <div class="item__checkbox-mark"></div>
                <label class="item__label" for='${item.id}'>
                    <h2 class="item__label-title">${item.title}</h2>
                    <p class="item__label-description">${item.completed}</p>
                </label>
            </div>
                `);
                checkboxListId.push(document.getElementById(item.id));
            }

        }
    )
    checkboxListId.map(item=>console.log(item));
}

getTodos().then();
