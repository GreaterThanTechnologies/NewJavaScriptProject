
/** names the class Partner */
class Partner {

  /** the constructor is responsible for creating objects of the same type
   * by calling the constructor function below using destructuring*/
  constructor({id, fname, lname, title, level}) {
    this.id = id
    this.fname = fname
    this.lname = lname
    this.title = title
    this.level = level
  }

  /**the static word is an indicator of a class function and is accessible
   * outside of the class in which it is named. fetch is a built in function
   * that calls on a URL to retrieve data via an API, in this case retrieving 
   * the partners located at the url indicated. The resp (response) is the  result 
   * of a resolution that is being invoked by the .then method, that also returns
   * a promise. .json converts the response to a javascript object. The final actions
   * included in this fetchPartners function is to pass
   * the response to other functions for them to be invoked
   */
  static fetchPartners() {
    fetch('http://localhost:3000/partners')
    .then(resp => resp.json())
    .then(array => {
      let partners = array.map(partner => new Partner(partner))  
      Partner.appendPartnerLists(partners)
      Partner.partnerTableRows(partners)
    })
  }

  /** takes the response from the fetch function that is passed into this function
   * as an argument and creates options for selection by the web user. It starts this
   * off by locating an element within the html page by the name of partnerOptionsList
   * and creates options for selection after iterating through the response using
   * forEach. Ending the function with an .add to add each of the partners fname
   * as options for the dropdown
   */
  static appendPartnerLists(array) { 
    let partnerList = document.getElementById('partnerOptionsList')
    array.forEach(function(object) {
      let partner = document.createElement("OPTION");
      partner.text = object.fname
      partner.id = object.id
      partnerList.add(partner)
    })
  }

  // populates the table with the partner data, names, title
  // level by finding the element by ID table1, also iterating through
  // the response received by the fetchPartners function above, 
  static partnerTableRows(array) { 
    let tableData = document.getElementById('table1')
    // array.forEach(function(object) {
    //   debugger
    
      array.forEach(function(object) {
      // creates the  row inside the table as well as setting the 
      // the attribute for ID as r + object.id
      let headerRow = document.querySelector("#table1 > tbody > tr")
      let tableRow = tableData.insertRow(headerRow[0])
      tableRow.setAttribute("id", "r" + object.id)

      // within index 0 of the tableRow sets the html to equal partner's
      // first and last name as listed within the partner column as well
      // as includes the onclick to the partner name
      let tableCellName = tableRow.insertCell(0)
      tableCellName.setAttribute("id", "c" + object.id ) 
      tableCellName.innerHTML = object.fname + " " + object.lname;

       // within index 1 of the tableRow sets the html to equal partner's
      // title as listed within the title column
      let tableCellTitle = tableRow.insertCell(1)
      tableCellTitle.innerHTML = object.title

      // within index 2 of the tableRow sets the html to equal partner's
      // level as listed within the level column
      let tableCellLevel = tableRow.insertCell(2)
      tableCellLevel.innerHTML = object.level

      // inserting the delete actions in the action column
      // within the partners table. This also assigns the id
      // to the partner for the delete button for the destroy method
      // located within the rails backend operations.
      let tableCellAction = tableRow.insertCell(3)
      let button = document.createElement("button");
      button.setAttribute("text", "Delete" )
      button.setAttribute("id", "b" + object.id)
      button.innerText = "Delete Partner"
      tableCellAction.appendChild(button)
      
      /** adds event listeners for click events that call on the action of deleting the partner when 
       * the delete button is clicked as well as the action of fetching tasks when the partners name
       * is clicked to display the partners tasks within the modal
       */
      document.getElementById("c" + object.id).addEventListener('click', Task.fetchTasks) 
      document.getElementById("b" + object.id).addEventListener('click', object.deletePartnerFunction)
    })  
  }

  /** receives the event from the click event listed directly above and passes it into the deletePartnerFunction
   * as an argument
   */
  deletePartnerFunction(event) {

  // takes the event object and removes the "b" from in front of the
  // id to retain the id of the partner for deletion by slicing the first character
  // of the id, making it a simple integer. i.e. b3 = 3 after the slice is complete
  let subBtnPartId = this.id.slice(1)

  /**this fetch function calls for a specific partners information by using the 
   * partners id number from the slice operation above.
   */
  fetch(`http://localhost:3000/partners/${subBtnPartId}`, {

  /**declares to the API that what is being requested is a deletion of said partner by indicating 
   * the partner id within the API call
   */
    method: "DELETE"
  }).then(resp => resp.json()) 
    .then(action => {
      console.log(action)
      
      // creates the id= for us to find and delete row so that the partner is no longer in the db
      // by removing the element after finding it by ID and removing 'el'
      let dleBtn = "r" + subBtnPartId
      let el = document.getElementById(`${dleBtn}`)
      el.remove()

      /**this is setting a variable 'person' to be the person that was indicated and deleted by the delete
       * function. This also then removes the child node from the parent node resulting in the
       * removal of the partner from the options dropdown list.
       */
      let person = document.getElementById(subBtnPartId)
      person.parentNode.removeChild(person)
     })
  }

}








 