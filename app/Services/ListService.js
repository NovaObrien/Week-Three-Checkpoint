import List from "../Models/List.js";
import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"

//Public
class ListService {
  constructor() {
    console.log("List Service Operating")
    ProxyState.on("lists", saveState)
    ProxyState.on("tasks", saveState)
  }
  delete(id) {
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
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)

      }
    })
    // {
    //   ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    // }
  }
  create(rawListData) {
    let lists = ProxyState.lists
    lists.push(new List(rawListData))
    ProxyState.lists = lists

    console.log(ProxyState.lists)

  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?

  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const listService = new ListService();
