import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from '../AppState.js'
export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get listTemplate() {
    return /*html*/`
    <div class="col-3 border rounded shadow-lg">
      <h2>${this.title} <button type="button"class="text-danger close mt-3" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button></h2>

      <form onsubmit="app.taskController.create(event, '${this.id}')">
        <div class="form-group">
          <input type="text" name="taskTitle" class="form-control" placeholder = "Enter List Item...">
          <button type="submit" name="" id="" class="btn btn-primary">Add List</button>
        </div>
        <div class="row">
          ${this.tasks}
        </div>
      </form>
    </div>`
  }

  get tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(i => i.listId == this.id)
    tasks.forEach(i => template += i.taskTemplate)
    return template
  }
}

