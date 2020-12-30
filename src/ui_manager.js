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
    let todo = addTodo("New todo", "Completely new todo", "12/12/1997", "high", "some stuff", "other stuff")

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

function bootstrapRow(){
    const row = document.createElement("div")
    row.classList.add("row")

    return row
}

function bootstrapColumn(colLength){
    const column = document.createElement("div")
    column.classList.add(`col-md-${colLength}`)

    return column
}

function displayTodoDetails(todoItem){
    const noteInfoColumn = document.getElementById("note-info-column")
    noteInfoColumn.innerHTML = ""

    /* Create first row and append items */
    const rowTitle = bootstrapRow()

    const columnTitle = bootstrapColumn(9)

    const columnDate = bootstrapColumn(3)

    const todoTitle = document.createElement("input")
    todoTitle.classList.add("form-control", "text-center", "todo-title")
    todoTitle.setAttribute("type", "text")
    todoTitle.value = todoItem.Title

    const todoDate = document.createElement("input")
    todoDate.classList.add("form-control", "todo-text")
    todoDate.setAttribute("type", "date")
    todoDate.value = todoItem.DueDate

    columnTitle.append(todoTitle)
    columnDate.append(todoDate)

    rowTitle.append(columnTitle, columnDate)

    /* Create description and append items */
    const rowDescription = bootstrapRow()

    const columnDescriptionTitle = bootstrapColumn(12)

    const todoDescriptionTitle = document.createElement("h3")
    todoDescriptionTitle.innerHTML = `<i class="fa fa-list"></i> Description`

    const columnDescriptionContent = bootstrapColumn(12)

    const columnDescText = document.createElement("input")
    columnDescText.classList.add("form-control", "todo-text")
    columnDescText.setAttribute("type", "text")
    columnDescText.value = todoItem.Title

    columnDescriptionContent.append(columnDescText)

    columnDescriptionTitle.append(todoDescriptionTitle)
    
    rowDescription.append(columnDescriptionTitle, columnDescriptionContent)

    /* Create and append checklist items */
        // Title
    const rowChecklist = bootstrapRow()

    const columnChecklistTitle = bootstrapColumn(12)

    const todoChecklistTitle = document.createElement("h3")
    todoChecklistTitle.innerHTML = `<i class="fa fa-check-square"></i> Checklist`

    columnChecklistTitle.append(todoChecklistTitle)

        // content
    const columnChecklistContent = bootstrapColumn(12)

    const columnChecklistContentContainer = document.createElement("div")
    columnChecklistContentContainer.classList.add("form-check")


    todoItem.CheckList.forEach(elem => {
        const checkListItemContainer = document.createElement("p")
        checkListItemContainer.classList.add("check-list-container")


        const checkListItemBox = document.createElement("input")
        const checkListItemLabel = document.createElement("label")

        checkListItemBox.setAttribute("class", "form-check-input")
        checkListItemBox.setAttribute("type", "checkbox")
        checkListItemBox.setAttribute("id", "checkBox")
        checkListItemLabel.setAttribute("class", "form-check-label")
        checkListItemLabel.setAttribute("for", "checkBox")
        checkListItemLabel.innerHTML = elem

        checkListItemContainer.append(checkListItemBox, checkListItemLabel)

        columnChecklistContentContainer.append(checkListItemContainer)

    })


    columnChecklistContent.append(columnChecklistContentContainer)

    rowChecklist.append(columnChecklistTitle, columnChecklistContent)


    noteInfoColumn.append(rowTitle, rowDescription, rowChecklist, todoItemOptionButtonsContainer())    
}

function todoItemOptionButtonsContainer(){
    const buttonRows = bootstrapRow()
    buttonRows.classList.add("text-center")

    const buttonSave = document.createElement("button")
    buttonSave.classList.add("btn", "btn-success", "options-button")
    buttonSave.innerHTML = "Save"

    const buttonDelete = document.createElement("button")
    buttonDelete.classList.add("btn", "btn-danger", "options-button")
    buttonDelete.innerHTML = "Delete"

    buttonRows.append(bootstrapColumn(1), buttonSave, bootstrapColumn(1), buttonDelete, bootstrapColumn(1))

    return buttonRows
}

function displayNewTodoForm(){

}