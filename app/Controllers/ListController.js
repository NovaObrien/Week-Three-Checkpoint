import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js"


//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  ProxyState.lists.forEach(l => template += l.listTemplate)
  document.getElementById("listsId").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    console.log("List Controller Online")
    //NOTE: Dont forget to register an event listener(s).
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists();
  }

  create(event) {
    event.preventDefault()
    // let form = event.target

    let rawListData = {
      title: event.target.title.value
    }
    listService.create(rawListData)
    event.target.reset()
  }

  delete(id) {
    listService.delete(id)

  }

  //TODO: Your app will need the ability to create, and delete lists
}
