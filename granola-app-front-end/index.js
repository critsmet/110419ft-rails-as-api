//Upon page load, we make a request to our API and display the Granola's name and description

const granolaList = document.getElementById('granola-list')

function fetchGranolas(){
  //fetch all granolas
  fetch("http://localhost:3000/granolas")
    .then(resToJson)
    .then(function(jsonObj){
      //what do I want to do with this JSON object
      //access the data key, which points to an array of granola objects
      //iterate over each object to get the name and description
      //put that information on the DOM
      let data = jsonObj.data
      data.forEach(putGranolaOnDom)
      //a callback function is a function that we pass to another function or a method that determines the logic or return value/result of that function

    })
}

function resToJson(res){
    return res.json()
}

function putGranolaOnDom(granola){
  granolaList.innerHTML += `
    <li>${granola.attributes.name}: ${granola.attributes.description}</li>
  `
}

fetchGranolas()
