let map;
let latitude = 0;
let longitude = 0;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location-status").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  document.getElementById(
    "location-status"
  ).innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;

  // Display map
  const latLng = { lat: latitude, lng: longitude };
  map = new google.maps.Map(document.getElementById("map"), {
    center: latLng,
    zoom: 15,
  });

  new google.maps.Marker({
    position: latLng,
    map: map,
  });

  // Set hidden input values for form submission
  document.getElementById("latitude").value = latitude;
  document.getElementById("longitude").value = longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      document.getElementById("location-status").innerHTML =
        "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      document.getElementById("location-status").innerHTML =
        "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      document.getElementById("location-status").innerHTML =
        "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      document.getElementById("location-status").innerHTML =
        "An unknown error occurred.";
      break;
  }
}
