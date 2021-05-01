let partnerResponsibilities = fetch('http://localhost:3000/responsibilities')
  .then(resp => resp.json())
  .then(json => console.log(json))

let partners = fetch('http://localhost:3000/partners')
  .then(resp => resp.json())
  .then(json => console.log(json))
 
function partner(partners) {
  console.log(partners)
}