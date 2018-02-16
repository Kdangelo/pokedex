$(document).ready(function() {
  pages(1, 1);
  $('#p1').addClass('active');
  
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#display .char").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Páginas:
$('#p1').click(function () {
  $('#display').empty();
  $('#p1').addClass('active');
  $('#p2,#p3,#p4,#p5,#p6,#p7,#p8').removeClass('active');
  pages(1, 1);
});
$('#p2').click(function() {
  $('#display').empty();
  $('#p2').addClass('active');
  $('#p1,#p3,#p4,#p5,#p6,#p7,#p8').removeClass('active');
  pages(51, 2);
});
$('#p3').click(function () {
  $('#display').empty();
  $('#p3').addClass('active');
  $('#p1,#p2,#p4,#p5,#p6,#p7,#p8').removeClass('active');
  pages(101, 3);
});
$('#p4').click(function () {
  $('#display').empty();
  $('#p4').addClass('active');
  $('#p2,#p3,#p1,#p5,#p6,#p7,#p8').removeClass('active');
  pages(151, 4);
});
$('#p5').click(function () {
  $('#display').empty();
  $('#p5').addClass('active');
  $('#p2,#p3,#p4,#p1,#p6,#p7,#p8').removeClass('active');
  pages(201, 5);
});
$('#p6').click(function () {
  $('#display').empty();
  $('#p6').addClass('active');
  $('#p2,#p3,#p4,#p5,#p1,#p7,#p8').removeClass('active');
  pages(251, 6);
});
$('#p7').click(function () {
  $('#display').empty();
  $('#p7').addClass('active');
  $('#p2,#p3,#p4,#p5,#p6,#p1,#p8').removeClass('active');
  pages(301, 7);
});
$('#p8').click(function () {
  $('#display').empty();
  $('#p8').addClass('active');
  $('#p2,#p3,#p4,#p5,#p6,#p7,#p1').removeClass('active');
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
        //console.log(data);
        $('#display').append(`
          <li class="char ${data.name} ${data.types[0].type.name} left center-align hoverable">
            <div class="img-box">
              <img src="https://pokeapi.co/media/img/${data.id}.png" class="responsive-img" alt="${data.name}">  
            </div>
            <h4 class="uppercase">${data.name}<h4>
            <p>${data.types[0].type.name}</p>
          </li>    
        `);
      });
  }
}