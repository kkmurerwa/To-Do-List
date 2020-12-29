import { getTodos, addTodo, createTestTodos } from './note_manager'

const noteListWindow = document.getElementById("div-list-of-todos")

export function createNoteListWindow(){
    const addTodoButton = document.createElement("button")
    addTodoButton.classList.add("btn", "btn-dark", "add-todo-button")
    addTodoButton.innerHTML = '<i class="fa fa-plus"></i> Add To-do item'
    addTodoButton.addEventListener("click", function(){
        addTodoClicked()
    })

    noteListWindow.appendChild(addTodoButton)
}

function addTodoClicked(){
    // Add new todo to list and get instance of the new todo
    let todo = addTodo("New todo", "Completely new todo", "12/12/1997", "high")

    const todoItem = document.createElement("a")
    todoItem.innerHTML = todo.Title
    todoItem.classList.add("todo-item")
    todoItem.addEventListener("click", function(){
        displayTodoDetails(todo)
    })

    noteListWindow.appendChild(todoItem)

    console.table(getTodos())
}

export function displayTodos(){
    let todos = getTodos()

    todos.forEach(elem => {
        const todoItem = document.createElement("a")
        todoItem.innerHTML = elem.Title
        todoItem.classList.add("todo-item")
        todoItem.addEventListener("click", function(){
            displayTodoDetails(elem)
        })

        noteListWindow.appendChild(todoItem)
    })
}

function displayTodoDetails(todoItem){
    const todoTitle = document.getElementById("todo-item-title")
    todoTitle.innerHTML = todoItem.Title

    const todoDate = document.getElementById("todo-item-date")
    todoDate.innerHTML = todoItem.DueDate

    const todoDesc = document.getElementById("todo-item-description")
    todoDesc.innerHTML = todoItem.Description
}