const fs = require('fs');

// Function to read todos from a file
function readTodos() {
    try {
        const data = fs.readFileSync('todos.json', 'utf8');
        return JSON.parse(data) || [];
    } catch (err) {
        return [];
    }
}

// Function to save todos to a file
function saveTodos(todos) {
    fs.writeFileSync('todos.json', JSON.stringify(todos));
}

// Add a new todo
function addTodo(todo) {
    const todos = readTodos();
    todos.push(todo);
    saveTodos(todos);
}

// Display all todos
function displayTodos() {
    const todos = readTodos();
    console.log(todos);
}

// Add new todos
addTodo("groceries");
addTodo("project changes");

// Display all todos
displayTodos();

