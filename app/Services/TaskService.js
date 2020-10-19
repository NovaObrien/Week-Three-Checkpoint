import Task from "../Models/Task.js";
import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
  constructor() {
    ProxyState.on("tasks", saveState)
  }

  delete(id) {

    if (window.confirm("Are you sure?")) {
      ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    }
  }

  create(rawTaskData) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTaskData))
    ProxyState.tasks = tasks
  }

}

export const taskService = new TaskService()