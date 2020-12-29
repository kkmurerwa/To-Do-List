import { getTodos, addTodo, createTestTodos } from './note_manager'
import { createNoteListWindow, displayTodos } from './ui_manager'



window.onload = function (){
    // Create notelist DOM elements
    createNoteListWindow()

    // Create test todos
    createTestTodos()

    // Get todos
    let todos = getTodos()

    // Display todos
    displayTodos()

    // Log todos
    console.table(todos)
}
