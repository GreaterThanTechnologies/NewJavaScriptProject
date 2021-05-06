const responsibilities = []

function fetchResponsibilities(userId) {
  return fetch('http://localhost:3000/responsibilities')
  .then(response => response.json())
  .then(data => { for (let counter = 0; counter < data.length; counter++){
  if(userId==data[counter].partner_id)
    return (data[counter].task)
  };
  })
}
 
function expandPartnerTasks(event) {
  // let resp = fetchResponsibilities()
  let pIdSplice = event.target.id.slice(1)
  // for (let counter = 0; counter < resp.length; counter++) {
  //   console.log(resp.length)
  // }
  let resp = fetchResponsibilities(pIdSplice)
  console.log(resp)
}


function addAnotherTask(array) {
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



