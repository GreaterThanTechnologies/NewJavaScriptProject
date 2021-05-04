class Partner {
  constructor(partner) {
    this.fname = partner.fname
    this.lname = partner.lname
    this.title = partner.title
    this.level = partner.level
  }
}

function submitTasksToDb() {
  console.log("from submitTasksToDbFunction")
  // This is to append the task(s) to the partner indicated from the drop down
}

function fetchPartners() {
  fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(array => listPartnerLists(array))
}

function listPartnerLists(array) { 
  array.forEach(function(object) {
    let partnerList = document.getElementById('showPartnersList')
    let partner = document.createElement("OPTION");
    let addToList = object.fname
    // addToLit.appendChild(partnerList)
    console.log(object)
  debugger
  })
}
// delete below reference only
 let addTaskList = document.getElementById('inputList')
  let task = document.createElement("INPUT");
  addTaskList.appendChild(task)
  // 

// works
fetchPartners()
console.log("from partners.js")
 