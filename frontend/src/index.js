 /**This works and renders json in the browser window appropriately */
function fetchResponsibilities() {
  return fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(json => console.log(json))
}

/**This does not work for what I am trying to do. I am trying to take the response
 * from above and create a h2 element, innerHTML of the task for the
 * partner
 */
function renderResponsibilities(responsibilities) {
  let partnerRes = document.querySelector('main')
  responsibilities.forEach(responsibility => {
    const h2 = document.createElement('h2')
    h2.innerHTML = responsibilities.task
    main.appendChild(h2)
  })
}

/**This works and renders json in the browser window appropriately */
function fetchPartners() {
  return fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(json => console.log(json))
  // this has the partners
}

// /**not working, not recognizing the click event */
// document.getElementById('partnerName').addEventListener('click', function(event) {
//   alert('Element for Partner Name has been clicked!');
// });

// /**this does not work either...adds compatibility so I read for the click event, 
// tried to add this when the above did not Work. */
// partnerBtn.addEventListener('click', {
//   handleEvent: function(event) {
//     alert('Element for Partner Name has been clicked!');
//   }
// });



function addAnotherTask() {
  // event.preventDefault()
  let addTaskList = document.getElementById('inputList')
  let task = document.createElement("INPUT");
  addTaskList.appendChild(task)
}


// function myFunction() {
//   var x = document.createElement("INPUT");

//   x.setAttribute("type", "text");
//   x.setAttribute("placeholder", "default");
//   document.body.appendChild(x);
// }



/**this console logs appropriately, shows the .js file is being read */
console.log("James is a Ninja")
fetchResponsibilities()
fetchPartners()