function partner(fname, lname, title, level) {
  return {
    fname,
    lname,
    title,
    level 
  }
}

function Partner(fname, lname, title, level) {
  this.fname = fname,
  this.lname = lname,
  this.title = title,
  this.level = level
}

function submitTasksToPartnerTable(event) {
  event.preventDefault()
  let form = document.getElementById('form1');
  let task = form.elements['']
   debugger
  // let submitPartnerTaskBtn = 
  // This is to append the task(s) to the partner indicated from the drop down
}

function fetchPartners() {
  fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(array => {
    listPartnerLists(array)
    partnerTableRows(array)
  })
}

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

function partnerTableRows(array) { 
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
  })
}
// works
fetchPartners()
console.log("from partners.js")
 