function fetchResponsibilities() {
  return fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(json => console.log(json))
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
  /** lists the value of the array from the index input value */

  /** we need to set a counter and loop through while it is less
   * then the .length of the array for tasks*/
  
  
  // for (i = 0; i < cars.length; i++) {
  //   text += cars[i] + "<br>"
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

// delete after
{/* <script>
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
	alert(x)
}
</script> */}
// </head>
{/* <body>

<form name="myForm"onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form> */}


// let taskData = document.forms["form1"]["fname"].value
