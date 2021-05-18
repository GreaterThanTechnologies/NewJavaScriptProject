class Task {

  constructor(task) {
    this.todo = task.todo
    this.id = task.id
  }

  /** after reviewing the fetch cheat sheet */
  static fetchTasks(event) {
    let pIdSplice = event.target.id.slice(1)
    pIdSplice = parseInt(pIdSplice)
    fetch(`http://localhost:3000/partners/${pIdSplice}/tasks`)
    .then(jsonToJs)
    .then(data => {
      Task.appendTaskToModal(data, pIdSplice)
    })
  }

  static appendTaskToModal(data) {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let taskDiv = document.getElementById('myTask')
    for (let list of data) {
      let task = new Task(list)
      task.appendList(taskDiv, modal)
    }}
     
  appendList(taskDiv, modal) {
    const todoLi = document.createElement("li")
      // const todoDelete = document.createElement('button')
      // todoDelete.innerText = "Delete"
      // // if list id === list(pIdSplice) 
      todoLi.innerText = this.todo
      // todoDelete.addEventListener('click', function(e) {
        // task.deleteTodo(todoLi)
      // }
      // todoLi.prepend(todoDelete)
      taskDiv.append(todoLi)
    

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      document.getElementById('myTask')
      modal.style.display = "none";
      li.innerHTML = "" 
    }
    window.onclick = function() {
      if (event.target == modal) {
        modal.style.display = "none";
        taskDiv.innerHTML = ""  
      }
    }
  }

//   static submitTasksToDb() {
//     event.preventDefault()
//     let taskDataTasks = document.forms["form1"]["task"]
//     let taskDataName = document.forms["form1"]["fname"]
//     if(taskDataTasks.length) {
//       for (let counter = 0; counter < taskDataTasks.length; counter++) {
//         console.log(taskDataTasks[counter].value)
//       }
//     }
//     else{
//       console.log(taskDataTasks.value)
//     }
//     counter = 0;
//   }

  static postTask(e) {
    let optionsList = document.getElementById('partnerOptionsList')
    const partnerId = optionsList.options[optionsList.selectedIndex].id
    const userInput = event.srcElement.form[1].value
    const body ={
      task: {
        todo: userInput,
        partner_id: partnerId
      }
    }
    const options ={
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    }

    fetch("http://localhost:3000/tasks", options)
    .then(jsonToJs)
    .then(task => {
      let newList = new Task(task) 
    })
    document.getElementById("form1").reset();

    e.preventDefault()

  }



}







// document.getElementById("form1").addEventListener('submit', submitTasksToDb)


// receives the value of the submitted tasks from above function
// going to save tasks to the db














