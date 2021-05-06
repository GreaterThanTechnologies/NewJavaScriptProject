// gathers information from the database and returning the
// response for manipulating the DOM
function fetchPartners() {
  fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(array => {
    listPartnerLists(array)
    partnerTableRows(array)
    // partnerTableActionRow(array)
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
    console.log(partner)
    partnerList.add(partner)
  })
}
// populates the table with the partner data, names, title
// level.
function partnerTableRows(array) { 
  let findActionDiv = document.getElementById('deleteEditSubmitActionTableColumn')
  let tableData = document.getElementById('table1')
  array.forEach(function(object) {
    // creates the  row inside the table
    let tableRow = tableData.insertRow(object.id)
    // within index 0 of the tableRow sets the html to equal partner's
    // first and last name as listed within the partner column
    let tableCellName = tableRow.insertCell(0)
    tableCellName.innerHTML = object.fname + " " + object.lname;
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
    // let x = document.createElement("button");
    // x.setAttribute("type", "button");
    // x.setAttribute("text", "Delete" )
    // tableCellAction.appendChild(x) 
    tableCellAction.innerHTML = '<button onclick="deletePartnerFunction()">Delete Partner</button>'
  })
}
/**function "clickEvent" to delete partner from onclick within table */
function deletePartnerFunction() {
alert("Sexy Stuff Going on Here!")
}

                


// works
console.log("from partners.js")
 