class Task {

  /** the constructor is responsible for creating objects of the same type
   * by calling the constructor function below without the use of destructuring*/
  constructor(task) {
    this.todo = task.todo
    this.id = task.id
  }

  /** class function that is responsible for retrieving data from the API, separating
   * the id into a usable form using the slice method and then passing the
   * data and id to appendTaskModal
   */
  static fetchTasks(event) {
    let pIdSplice = event.target.id.slice(1)
    pIdSplice = parseInt(pIdSplice)
    fetch(`http://localhost:3000/partners/${pIdSplice}/tasks`)
    .then(jsonToJs)
    .then(data => {
      Task.setupModal(data, pIdSplice)
    })
  }

  /** responsible for finding the modal element, setting the view to block as well
   * as myTask element. Finally calling appendList on task and passing taskDiv
   * & modal to the instance method appendList
   */
  static setupModal(data) {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    let taskDiv = document.getElementById('myTask')
    for (let list of data) {
      let task = new Task(list)
      task.appendTaskToModal(taskDiv, modal)
    }}
     
  /** responsible for creating elements for the table to display the partners
   * on the user UI by appending after creating the tasks for display in the modal
   * after a click event occurs. Commented out portions of this function were originally
   * created to delete tasks from the modal and partner. Did not have time to 
   * realize this feature. */  
  appendTaskToModal(taskDiv, modal) {
    const todoLi = document.createElement("li")
      // const todoDelete = document.createElement('button')
      // todoDelete.innerText = "Delete"
      // // if list id === list(pIdSplice) 
      todoLi.innerText = this.todo
      // todoDelete.addEventListener('click', function(e) {
        // task.deleteTodo(todoLi)
      // }
      // todoLi.prepend(todoDelete)
      taskDiv.append(todoLi)
    
    /**removes the modal from view when the X is clicked within the modal */
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      document.getElementById('myTask')
      modal.style.display = "none";
      li.innerHTML = "" 
    }
    /**removes the modal from view when anywhere outside of the modal is
     * clicked and within the window of view
     */
    window.onclick = function() {
      if (event.target == modal) {
        modal.style.display = "none";
        taskDiv.innerHTML = ""  
      }
    }
  }



//   static submitTasksToDb() {
//     event.preventDefault()
//     let taskDataTasks = document.forms["form1"]["task"]
//     let taskDataName = document.forms["form1"]["fname"]
//     if(taskDataTasks.length) {
//       for (let counter = 0; counter < taskDataTasks.length; counter++) {
//         console.log(taskDataTasks[counter].value)
//       }
//     }
//     else{
//       console.log(taskDataTasks.value)
//     }
//     counter = 0;
//   }



  /**gets the user input from adding a task ready for a post request by setting
   * variables and constructing the body set for the strong params expected by the 
   * rails API and the create method within the controller file for the tasks
   */
  static postTask(e) {
    let optionsList = document.getElementById('partnerOptionsList')
    const partnerId = optionsList.options[optionsList.selectedIndex].id
    const userInput = event.srcElement.form[1].value
    const body ={
      task: {
        todo: userInput,
        partner_id: partnerId
      }
    }

    /**sets what is being sent in as the body of the post and what language it is sending
     * , in this case json. JSON.stringify transforms the data from a JS object into
     * a json string
     */
    const options ={
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(body)
    }

    /** makes the fetch post request to the API sending in the options stated above. 
     * receiving a promise, upon resolution of the promise, the response, beit fulfilled
     * or rejected, thats the response and converts the json string into a JS object then 
     * adding the task to the partners modal list of tasks. Finally clearing out the form
     * creating essentially a new form for another submission. preventDefault 
     * stops the default action of refreshing the page upon a form submission
     */
    fetch("http://localhost:3000/tasks", options)
    .then(jsonToJs)
    .then(task => {
      let newList = new Task(task) 
    })
    document.getElementById("form1").reset();

    e.preventDefault()

  }



}


















