
/** after reviewing the fetch cheat sheet */
function fetchTasks(event) {
  let pIdSplice = event.target.id.slice(1)
  pIdSplice = parseInt(pIdSplice)
  fetch(`http://localhost:3000/partners/${pIdSplice}/tasks`)
  .then(resp => resp.json())
  .then(data => {
    appendTaskToModal(data, pIdSplice)
  })
}


function appendTaskToModal(data) {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let taskDiv = document.getElementById('myTask')
  for (let list of data) {
    const todoLi = document.createElement("li")
    const todoDelete = document.createElement('button')
    todoDelete.innerText = "Delete"
    // if list id === list(pIdSplice) 
    todoLi.innerText = list.todo
    todoDelete.addEventListener('click', function(e) {
      deleteTodo(todoLi)
    })
    // todoLi.prepend(todoDelete)
    taskDiv.append(todoLi)
  }
  let span = document.getElementsByClassName("close")[0];
  // closing the modal does not clear out what was there before when opening it 
  // up again
  span.onclick = function() {
    document.getElementById('myTask')
    modal.style.display = "none";
    li.innerHTML = "" 
  }
  window.onclick = function() {
    if (event.target == modal) {
      modal.style.display = "none";
      taskDiv.innerHTML = ""  /**clear modal somehow... modal.clear? */
    }
  }
}





// function deleteTodo(todoLi) {
   
//   let taskId = e.target.nextSibling.previousSibling.id
//   fetch(`http://localhost:3000/tasks/${taskId}`, {
//     method: "DELETE"
//   }).then(resp => resp.json())
//     .then(taskId => console.log(taskId))
     
// }

document.getElementById("form1").addEventListener('submit', submitTasksToDb)
function submitTasksToDb() {
  event.preventDefault()
  let taskDataTasks = document.forms["form1"]["task"]
  let taskDataName = document.forms["form1"]["fname"]
  if(taskDataTasks.length) {
    for (let counter = 0; counter < taskDataTasks.length; counter++) {
      console.log(taskDataTasks[counter].value)
    }
  }
  else{
    console.log(taskDataTasks.value)
  }
  counter = 0;
}
// receives the value of the submitted tasks from above function
// going to save tasks to the db
document.getElementById("submitTasksBtn").addEventListener("click", postTask);
function postTask(e) {
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
  .then(resp => resp.json())
  .then(task => {})
  document.getElementById("form1").reset();

   /** this does not work throws
  error that it is not iterable */
  e.preventDefault()

}

    // gets value of the individual inputs
    // inputList.children[0].value


  

