class Partner {
  constructor(partner) {
    this.fname = partner.fname
    this.lname = partner.lname
    this.title = partner.title
    this.level = partner.level
  }
}

function submitTasksToDb() {
  console.log("Yup, Ninja")
  // This is to append the task(s) to the partner indicated from the drop down
}

function fetchPartners() {
  return fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(json => console.log(json))
  // this has the partners
}
