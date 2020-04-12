// Get iss position
function getISS() {
  fetch("http://api.open-notify.org/iss-now.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      //pass on to geocoding handling
      getReverseGeocodingData(
        myJson.iss_position.latitude,
        myJson.iss_position.longitude
      );
      //ISSpassage(myJson.iss_position.latitude, myJson.iss_position.longitude);
    });
}

// Google Reverse Geocoding (Adress lookup)
// based on https://stackoverflow.com/questions/26387713/get-the-full-formatted-address-from-reverse-geocoding
function getReverseGeocodingData(lat, lng) {
  const latlng = new google.maps.LatLng(lat, lng);
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ latLng: latlng }, function (results, status) {
    if (status !== google.maps.GeocoderStatus.OK) {
      // No location found, outputs coordinates to DOM
      document.getElementById("ISS").innerHTML = "ISS is at " + lat + " " + lng;
    }

    // check if status is OK
    if (status === google.maps.GeocoderStatus.OK) {
      // location found! output specific location to DOM
      document.getElementById("ISS").innerHTML =
        "ISS is over " + results[0].formatted_address;
    }
  });
}

// API not working due to No 'Access-Control-Allow-Origin' header
function ISSpassage(lat, lng) {
  fetch("http://api.open-notify.org/iss-pass.json?lat=" + lat + "&lon=" + lng)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      document.getElementById("ISSpassage").innerHTML =
        "ISS will pass over you at";
    })
    .catch(function (e) {
      console.log(e);
    });
}

// countdown function for header
function countdown(endDate) {
  let days, hours, minutes, seconds;
  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return false;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10) + " days";
      document.getElementById("hours").innerHTML =
        ("0" + hours).slice(-2) + " hours";
      document.getElementById("minutes").innerHTML =
        ("0" + minutes).slice(-2) + " minutes";
      document.getElementById("seconds").innerHTML =
        ("0" + seconds).slice(-2) + " seconds";
    } else {
      document.getElementById("status").innerHTML = "Liftoff!";
    }
  }
}

// API for SpaceX launches
function getUpcomingLaunches() {
  fetch("https://api.spacexdata.com/v2/launches/upcoming")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let launchArray = "";

      for (let i = myJson.length - 1; i >= 0; i--) {
        let launch_date = new Date(myJson[i].launch_date_unix * 1000)
          .toISOString()
          .slice(0, 10); // converts unix timestap to JS ISO Date (without time)
        launchArray +=
          "<p>" + myJson[i].mission_name + " (" + launch_date + ")</p>";
      }

      document.getElementById("launches").innerHTML = launchArray;
    })
    .catch(function (e) {
      console.log(e);
    });
}

// Mobile menu

// open mobile menu
$(document).on("click", "#burger-menu", function (e) {
  $("body").toggleClass("open-menu");
  $(".main-menu ul:not(.sub-menu)").slideToggle();
});

// close mobile menu
$(document).on("click", "#x-menu", function (e) {
  $("body").toggleClass("open-menu");
  $(".main-menu ul:not(.sub-menu)").slideToggle();
});

function getF9Info() {
  fetch("https://api.spacexdata.com/v2/rockets/falcon9")
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let F9Data = "";
      F9Data += "<h3>" + myJson.name + "</h3>";
      F9Data += "<p>" + myJson.description + "</p>";
      F9Data += "<h4>Stats</h4>";
      F9Data += "<p>Cost per launch: $" + myJson.cost_per_launch + "</p>";
      F9Data += "<p>Success rate: " + myJson.success_rate_pct + "%</p>";
      F9Data += "<h4>Size</h4>";
      F9Data += "<p>" + myJson.diameter.meters + " meters in diameter</p>";
      F9Data += "<p>" + myJson.height.meters + " meters high</p>";
      F9Data += "<p>" + myJson.mass.kg + " Kg mass</p>";
      F9Data += "<h4>Tech</h4>";
      F9Data += "<p>" + myJson.engines.number + " engines</p>";
      F9Data += "<p>" + myJson.engines.layout + " layout</p>";
      F9Data +=
        "<p>Type of engines: " +
        myJson.engines.type +
        " version " +
        myJson.engines.version +
        "</p>";
      F9Data +=
        "<p>Uses " +
        myJson.engines.propellant_1 +
        " and " +
        myJson.engines.propellant_2 +
        " propellants</p>";
      F9Data += "<h4>Performance</h4>";
      F9Data +=
        "<p>Thrust (vacuum): " + myJson.engines.thrust_vacuum.kN + " kN</p>";
      F9Data +=
        "<p>Thrust (sea level): " +
        myJson.engines.thrust_sea_level.kN +
        " kN</p>";
      F9Data +=
        "<p>Thrust-to-weight ratio: " +
        myJson.engines.thrust_to_weight +
        "</p>";
      document.getElementById("falcon-9-modalinfo").innerHTML = F9Data;
    })
    .catch(function (e) {
      console.log(e);
    });
}

// form validation
function validateForm() {
  // get the inputs at runtime
  let fName = document.forms["contest_form"]["name"].value;
  let fPhone = document.forms["contest_form"]["phone"].value;
  let fAddress = document.forms["contest_form"]["address"].value;
  let fEmail = document.forms["contest_form"]["email"].value;
  let fTextarea = document.forms["contest_form"]["textarea"].value;
  // box for alerting about validation
  let alertbox = document.getElementById("alertBox");
  // regex
  let phone_regex = /^[0-9 +,.#()\-]*$/;
  let email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // check fields
  if (fName === "") {
    alertbox.innerHTML = "<p>Name field can not be empty.</p>";
    return false;
  } else if (!phone_regex.test(fPhone)) {
    alertbox.innerHTML =
      "<p>Phone number is not valid. Please format like ex. 12345678</p>";
    return false;
  } else if (fPhone === "") {
    alertbox.innerHTML = "<p>Phone field can not be empty</p>";
    return false;
  } else if (fAddress === "") {
    alertbox.innerHTML = "<p>Address field can not be empty.</p>";
    return false;
  } else if (!email_regex.test(fEmail)) {
    alertbox.innerHTML =
      "<p>Email is not valid. Please format like test@example.com</p>";
    return false;
  } else if (fTextarea === "") {
    alertbox.innerHTML = "<p>Textarea can not be empty.</p>";
    return false;
  } else {
    return true;
  }
}

// form textarea limitation
function form_limitText(textarea) {
  let wordCount = textarea.value.split(" ").length; // count words
  let wordsLeft = 300 - wordCount;
  document.getElementById("formCharacters").innerHTML =
    "You have " + wordsLeft + " words left";
  if (wordCount < 300) {
    textarea.maxLength = 9999; // reset limit
  }
  if (wordCount >= 300) {
    textarea.maxLength = textarea.value.length; // no more characters
  }
}
