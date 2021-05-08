const responsibilities = []



/** after reviewing the fetch cheat sheet */
function fetchResponsibilities(event) {
  let pIdSplice = event.target.id.slice(1)
  return fetch(`http://localhost:3000/responsibilities/${pIdSplice}`)
  .then(response => response.json())
  .then(data => { modalWithData(data.task)})
}
 function modalWithData(data) {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let list = document.getElementById('myTask')
  let taskPara = document.createElement('li')
  taskPara.innerText = data
  list.appendChild(taskPara)
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    list.innerHTML = ""
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      list.innerHTML = ""
    }
  }
  console.log(data)
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
      submitTaskSave(taskDataTasks[counter].value)
    }
  }
  else{
    submitTaskSave(taskDataTasks.value)
  }
   
}
// receives the value of the submitted tasks from above function
// going to save tasks to the db
function submitTaskSave(tasks) {
  event.preventDefault()
  let optionsList = document.getElementById('partnerOptionsList')
  let partnerId = optionsList.options[optionsList.selectedIndex].id
  fetch(`http://localhost:3000/responsibilities/${partnerId}`, {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(tasks),
    
  }).then(resp => resp.json())
    .then(data => console.log(data))
  console.log(tasks)
    // gets value of the individual inputs
    // inputList.children[0].value

   }
  


// works
console.log("from Responsibilities.js")



