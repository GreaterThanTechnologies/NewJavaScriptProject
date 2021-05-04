function renderResponsibilities(responsibilities) {
  
  let partnerRes = document.querySelector('main')
  responsibilities.forEach(responsibility => {
    const h2 = document.createElement('h2')
    h2.innerHTML = responsibilities.task
    main.appendChild(h2)
  })


console.log("James is a Ninja")
fetchResponsibilities()
Partner.fetchPartners()


}