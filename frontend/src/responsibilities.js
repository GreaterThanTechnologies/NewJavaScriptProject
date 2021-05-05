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

function addAnotherTask(event) {
  event.preventDefault()
  let addTaskList = document.getElementById('addTaskClick')
  let task = document.createElement("INPUT");
   addTaskList.appendChild(task)
}



// works
fetchResponsibilities()
console.log("from Responsibilities.js")
