function fetchResponsibilities() {
  return fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(json => console.log(json))
}

function renderResponsibilities(responsibilities) {
  let partnerRes = document.querySelector('main')
  responsibilities.forEach(responsibility => {
    const h2 = document.createElement('h2')
    h2.innerHTML = responsibilities.task
    main.appendChild(h2)
  })
}

function fetchPartners() {
  return fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(json => console.log(json))
}
console.log("James is a Ninja")
fetchResponsibilities()
fetchPartners()