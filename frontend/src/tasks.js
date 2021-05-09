
/** after reviewing the fetch cheat sheet */
function fetchResponsibilities(event) {
  let pIdSplice = event.target.id.slice(1)
  pIdSplice = parseInt(pIdSplice)
  fetch("http://localhost:3000/partners/")
  .then(resp => resp.json())
  .then(data => {
    displayInsideModal(data, pIdSplice)
  })
}
/** I think I need to go through and iterate over the data to
 * extract the partners todo lists, then in displayInsideModal
 * I can then iterate through that to extract only the todos 
 * the object. this could be done in one function, however
 * much easier to maintain and troubleshoot if separated
 */
// function separationOfTasks(data, pIdSplice){
//   return displayInsideModal(data, pIdSplice)
// }
//  only shows a all todos, not the todos associated with the partner
function displayInsideModal(data) {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
  let taskDiv = document.getElementById('myTask')
  for (let list of data) {
    const li = document.createElement("li")
    // if list id === list(pIdSplice) 
    li.innerText = list.tasks[0].todo
    taskDiv.append(li)
  }
  let span = document.getElementsByClassName("close")[0];
  // closing the modal does not clear out what was there before when opening it 
  // up again
  span.onclick = function(event) {
    document.getElementById('myTask')
    modal.style.display = "none";
    li.innerHTML = ""
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      li.innerHTML = ""
    }
  }
}
  // console.log(data)
  
function addAnotherTask(e) {
  event.preventDefault()
  let addTaskList = document.getElementById('inputList')
  let task = document.createElement("INPUT");
  task.type = "text"
  task.name = "task"
  inputList.appendChild(task)
}
// for adding tasks to specific partners, must use eventListener
// per instructor
document.getElementById("form1").addEventListener('submit', submitTasksToDb)
function submitTasksToDb() {
  event.preventDefault()
  let taskDataTasks = document.forms["form1"]["task"]
  let taskDataName = document.forms["form1"]["fname"]
debugger
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
  fetch("http://localhost:3000/tasks/", options)
  .then(resp => resp.json())
  .then(data => displayInsideModal(data)) /** this does not work throws
  error that it is not iterable */
  e.preventDefault()

}

    // gets value of the individual inputs
    // inputList.children[0].value


  


// works
console.log("from tasks.js")
