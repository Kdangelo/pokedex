 /*$.get('https://pokeapi.co/api/v2/pokedex', function(r) {
   console.log(r);
})*/

let display = document.querySelector('.display');

fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=500')
  .then(function(response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    let html = `<img src="${data.results[0].url}">
      <p>${data.results[0].name}</p>
    `;

    //Put that HTML on the page
    display.innerHTML = html;
  });

