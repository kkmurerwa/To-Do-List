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

export function notes (){
    console.log("Running notes funtion")
}