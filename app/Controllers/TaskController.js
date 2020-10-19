import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

export default class TaskController {

  create(event, listId) {
    event.preventDefault()


    let rawTaskData = {

      title: event.target.taskTitle.value,

      listId
    }

    taskService.create(rawTaskData)

    event.target.reset()

  }

  delete(id) {
    taskService.delete(id)
  }

}
