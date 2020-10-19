import Task from "../Models/Task.js";
import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
  constructor() {
    ProxyState.on("tasks", saveState)

  }

  delete(id) {
    // if (window.confirm()) {
    //   ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    // }

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

      }
      ProxyState.tasks = ProxyState.tasks.filter(i => i.id != id)
    })
  }

  create(rawTaskData) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTaskData))
    ProxyState.tasks = tasks
  }

}

export const taskService = new TaskService()