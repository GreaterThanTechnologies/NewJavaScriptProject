class Partner {
  constructor(id, fname, lname, title, level) {
    this.id = id
    this.fname = fname
    this.lname = lname
    this.title = title
    this.level = level
  }
}

// const options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//     Accept: "application/jason"
//   }
//   body :JSON.stringify(body)
// }

// gathers information from the database and returning the
// response for manipulating the DOM
function fetchPartners() {
  fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(array => {
    listPartnerLists(array)
    partnerTableRows(array)
  })
}
// fills in the dropdown select partner box with the
// current partners within the DB
function listPartnerLists(array) { 
  let partnerList = document.getElementById('partnerOptionsList')
  array.forEach(function(object) {
    let partner = document.createElement("OPTION");
    partner.text = object.fname
    partner.id = object.id
    partnerList.add(partner)
  })
}
// populates the table with the partner data, names, title
// level.
function partnerTableRows(array) { 
  let tableData = document.getElementById('table1')
  array.forEach(function(object) {
    // creates the  row inside the table
    let tableRow = tableData.insertRow(object.id)
    tableRow.setAttribute("id", "r" + object.id)
    // within index 0 of the tableRow sets the html to equal partner's
    // first and last name as listed within the partner column as well
    // as includes the onclick to the partner name
    let tableCellName = tableRow.insertCell(0)
    tableCellName.setAttribute("id", "c" + object.id ) 
    tableCellName.innerHTML = object.fname + " " + object.lname;
    // tableCellName.addEventListener("click", "expandPartnerTasks");
     // within index 1 of the tableRow sets the html to equal partner's
    // title as listed within the title column
    let tableCellTitle = tableRow.insertCell(1)
    tableCellTitle.innerHTML = object.title
    // within index 2 of the tableRow sets the html to equal partner's
    // level as listed within the level column
    let tableCellLevel = tableRow.insertCell(2)
    tableCellLevel.innerHTML = object.level
    // inserting the edit delete actions in the action column
    // within the partners table
    let tableCellAction = tableRow.insertCell(3)
    let x = document.createElement("button");
    x.setAttribute("text", "Delete" )
    x.setAttribute("id", "b" + object.id)
    x.innerText = "Delete Partner"
    tableCellAction.appendChild(x)
    // tableCellAction.innerHTML = '<button onclick="deletePartnerFunction()">Delete Partner</button>'
    document.getElementById("c" + object.id).addEventListener('click', fetchResponsibilities) 
    document.getElementById("b" + object.id).addEventListener('click', deletePartnerFunction)
  })  
}



/**function "clickEvent" to delete partner from onclick within table */
function deletePartnerFunction(event) {
  // takes the event object and removes the "b" from in front of the
  // id to retain the id of the partner for deletion
  let subBtnPartId = this.id.slice(1)
  // finds the partner show page by id number
  fetch(`http://localhost:3000/partners/${subBtnPartId}`, {
    method: "DELETE"
  }).then(resp => resp.json()) 
    .then(action => {
      // creates the id= for us to find and delete row
      dleBtn = "r" + subBtnPartId
      el = document.getElementById(`${dleBtn}`)
      el.remove()
    })

    
   
  console.log(subBtnPartId)
 }




// works
console.log("from partners.js")
 