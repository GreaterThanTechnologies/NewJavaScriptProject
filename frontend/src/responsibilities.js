function fetchResponsibilities() {
  return fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(json => console.log(json))
}

class Responsibilities {
  constructor(responsibility) {
    this.task = responsibility.task
  }
}

function addAnotherTask() {
   event.preventDefault()
  let addTaskList = document.getElementById('inputList')
  let task = document.createElement("INPUT");
  task.name = "task"
  task.type = "text"
  inputList.appendChild(task)
}

// for adding tasks to specific partners, must use eventListener
// per instructor
// document.getElementById("submitTasksBtn").addEventListener('click', submitTasksToDb)

/** this function is called on from within the form1 onsubmit= to be
 * performed when submit button was clicked
 */
function submitTasksToDb() {
  event.preventDefault() /**obviously stops default action of submitting the
  form to the db which would refresh the page */
/** assigns the variable taskData to all the form elements, in this case
 * ["form1"]["task"] specifically the "task"
 */
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
  // console.log(taskDataTasks.value)

  // console.log(taskDataTasks[0].value)
  console.log(taskDataName.value) 
  // displays the length of array
  // console.log(taskDataTasks)   
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
