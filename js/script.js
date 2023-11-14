import DisplayToday from './modules/DisplayToday.js'
import TodoList from './modules/ToDoList.js'

const list = document.querySelectorAll('.task')

const displayToday = new DisplayToday('.today')
displayToday.init()

const todoList = new TodoList('.create-button', '.todo-list')
todoList.init()

console.log(list.values)