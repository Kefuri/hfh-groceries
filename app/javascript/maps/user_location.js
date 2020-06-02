window.initUserLocation = function() {
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.SearchBox(input);

    var grab_place = document.getElementById('submit')
    grab_place.addEventListener('click', initAutoComplete)

    function initAutoComplete() {
      var place = autocomplete.getPlaces()[0];
      var lat = place.geometry.location.lat()
      var lng = place.geometry.location.lng()

      document.location.href='/nearby?lat='+lat+'&lng='+ lng
    }
}

export default initUserLocation