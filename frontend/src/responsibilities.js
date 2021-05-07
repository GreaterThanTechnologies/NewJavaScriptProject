const responsibilities = []

// async function fetchResponsibilities(){
//   let tester = await fetch('http://localhost:3000/responsibilities');
//   let works = await tester.json();
//   return (works)
// }
// async function getData() {
//   let working = await fetchStuff();
//   console.log(working);
// }



// function fetchResponsibilities(userId) {
//   return fetch('http://localhost:3000/responsibilities')
//   .then(response => response.json())
//   .then(data => { for (let counter = 0; counter < data.length; counter++){
//   if(userId==data[counter].partner_id)
//     return (data[counter].task)
//    };
//   })
// }

/** after reviewing the fetch cheat sheet */
function fetchResponsibilities(event) {
  let pIdSplice = event.target.id.slice(1)
  return fetch(`http://localhost:3000/responsibilities/${pIdSplice}`)
  .then(response => response.json())
  .then(data => { displayInsideModal(data)})
}

function displayInsideModal(data) {
  
 console.log(data.task)
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



