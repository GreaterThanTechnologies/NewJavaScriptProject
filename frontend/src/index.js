/**index.js file is the file that kicks off all other actions within the 
 * application. Without this file, the application would not run. In addition
 * to this, if the index,js file is not the last .js file to load, the application
 * would not run either.
 */


/** this calls on the class Partner and the function fetchPartners. This is responsible
 * for the API call initiation. This fetch receives a promise and while waiting for the
 * resolution, the addeventlistener is invoked
 */
Partner.fetchPartners()

/** this function merely helps to dry up the code by extracting a commonly used
 * code within the application and replacing it with this jsonToJs function
 */
function jsonToJs(resp) {
  return resp.json()
}

/** sets the event listener to respond to a click event when the button is
 * clicked for submitting a new task. The callback for this event listener is the
 * postTask function that is located in the Task class
 */
document.getElementById("submitTasksBtn").addEventListener("click", Task.postTask);


