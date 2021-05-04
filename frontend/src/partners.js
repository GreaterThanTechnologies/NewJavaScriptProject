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

  
  // delete after
  function myFunction() {
    var x = document.getElementById("mySelect");
    var partner = document.createElement("option");
    partner.text = "Kiwi";
    x.add(option);
  }
  // 
// works
fetchPartners()
console.log("from partners.js")
 