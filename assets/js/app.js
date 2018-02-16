
$(document).ready(function() {
  pages(1, 1);

  $('.modal').modal();

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
        console.log(data);

        let img = `https://pokeapi.co/media/img/${data.id}.png`;
        
        $('#display').append(`
          <a class="  modal-trigger" href="#modal${data.id}">        
            <li class="left center-align hoverable"><img src="https://pokeapi.co/media/img/${data.id}.png" class="responsive-img" alt="${data.name}">  
              <h4 style="color: #ee6e73;">${data.name}<h4>
              <p style="color: #ee6e73;">${data.types[0].type.name}</p>
            </li>
          </a> 
          <div id="modal${data.id}" class="modal modal-fixed-footer">
            <div class="modal-content">
              <div class"col s12 header-card" style="background-color: #ee6e73;">
                <img src="${img}" alt="" class="circle responsive-img">
                <h5 class="black-text light">${data.name}</h5>
              </div>
              <table class="centered bordered">

                <tbody>
                  <tr style="border-bottom-color: #000;">
                    <td>TIPO:</td>
                    <td>${data.types[0].type.name}</td>
                  </tr>
                  <tr style="border-bottom-color: #000;">
                    <td>HABILIDAD:</td>
                    <td> ${data.abilities[0].ability.name}</td>
                  </tr>
                  <tr style="border-bottom-color: #000;">
                    <td>FORMA:</td>
                    <td>${data.forms[0].name}</td>
                  </tr>
                  <tr style="border-bottom-color: #000;">
                    <td>EXPERIENCIA:</td>
                    <td>${data.base_experience}</td>
                  </tr>
                  <tr style="border-bottom-color: #000;">
                    <td>MOVIMIENTOS:</td>
                    <td>${data.moves[0].move.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `);
        $('.modal').modal();
      });
  }
}

