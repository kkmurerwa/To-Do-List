let myTodos = []

function ToDo(title, description, dueDate, priority) {
    this.Title = title
    this.Description = description
    this.DueDate = dueDate
    this.Priority = priority
}

function Note(title, description){
    this.Title = title
    this.Description = description
}

export function getTodos (){
    console.log("Getting todos")
    return myTodos
}

export function addTodo (title, description, date, priority){
    console.log("Creating new todo")
    let todo = new ToDo(title, description, date, priority)
    myTodos.push(todo)
    return todo
}

export function createTestTodos(){
    let todo1 = new ToDo("Title 1", "Description 1", "12/12/2020", "high")
    let todo2 = new ToDo("Title 2", "Description 2", "13/12/2020", "low")
    let todo3 = new ToDo("Title 3", "Description 3", "12/12/2020", "medium")

    myTodos.push(todo1, todo2, todo3)
}