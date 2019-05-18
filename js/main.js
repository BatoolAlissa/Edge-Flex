// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 31.945368, lng: 35.928371},
//     zoom: 10
//   });

// }


$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});