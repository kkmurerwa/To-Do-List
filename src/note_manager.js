let myNotes = []

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
}

export function addTodo (){
    console.log("Creating new todo")
}