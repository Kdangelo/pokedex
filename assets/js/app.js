let display = document.getElementById('searchResults');

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

$.getJSON('https://pokeapi.co/api/v2/pokemon-species', function(r) {
  console.log(r);
});
