function fetchResponsibilities() {
  return fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(array => {
    // expandPartnerTasks(array)
  })
}

function expandPartnerTasks() {
  document.getElementById('table1').innerHTML = ""
  
}

function addAnotherTask() {
   event.preventDefault()
  let addTaskList = document.getElementById('inputList')
  let task = document.createElement("INPUT");
  task.type = "text"
  task.name = "task"
  inputList.appendChild(task)
}

// for adding tasks to specific partners, must use eventListener
// per instructor
document.getElementById("submitTasksBtn").addEventListener('click', submitTasksToDb)
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
    console.log(taskDataName.value) 
}

// works
console.log("from Responsibilities.js")



