$(document).ready(function() {
  pages(1, 1);
});

// Páginas:
$('#p1').click(function () {
  $('#display').empty();
  pages(1, 1);
});
$('#p2').click(function() {
  $('#display').empty();
  pages(51, 2);
});
$('#p3').click(function () {
  $('#display').empty();
  pages(101, 3);
});
$('#p4').click(function () {
  $('#display').empty();
  pages(151, 4);
});
$('#p5').click(function () {
  $('#display').empty();
  pages(201, 5);
});
$('#p6').click(function () {
  $('#display').empty();
  pages(251, 6);
});
$('#p7').click(function () {
  $('#display').empty();
  pages(301, 7);
});
$('#p8').click(function () {
  $('#display').empty();
  pages(351, 8);
});

function pages(start, pageNum) {
  for (let i = start; i <= (50 * pageNum); i++) {
    let id = i;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        $('#display').append(`
          <li class="left center-align hoverable"><img src="https://pokeapi.co/media/img/${data.id}.png" class="responsive-img" alt="${data.name}">  
            <h4>${data.name}<h4>
            <p>${data.types[0].type.name}</p>
          </li>    
        `);
      });
  }
}