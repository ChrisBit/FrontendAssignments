function validateForm() {
  // get the inputs at runtime
  var a = document.forms["theForm"]["fname"].value;
  var b = document.forms["theForm"]["lname"].value;
  var c = document.forms["theForm"]["phone"].value;
  var d = document.forms["theForm"]["email"].value;

  // simple checks
  var phone_regexv1 = /^\d{8}$/;
  var email_regexv1 = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[a-zA-Z0-9]$/;

  // matches 8 digits, may contain spaces
  // inspiration: https://stackoverflow.com/questions/2095711/regular-expression-to-match-7-12-digits-may-contain-space-or-hyphen
  var phone_regex = /^(?:[-\s]?\d){8}$/;
  // to match common norwegian formats like
  // 12345678
  // 123 45 678

  // http://emailregex.com
  var email_regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // jslint gives me a Unexpected '-' warning. stackoverflow suggests that its safe to ignore this.

  // helpful tool
  // https://regex101.com

  // check if field is empty
  if (a === "") {
    document.getElementById("alertbox").innerHTML =
      "<p>First name field can not be empty.</p>";
    return false;
  } else if (b === "") {
    document.getElementById("alertbox").innerHTML =
      "<p>Last name field can not be empty.</p>";
    return false;
  }

  // if the field is not matched with regex, do not validate the form
  else if (!phone_regex.test(c)) {
    document.getElementById("alertbox").innerHTML =
      "<p>Phone number is not valid. Please format like ex. 12345678</p>";
    return false;
  } else if (!email_regex.test(d)) {
    document.getElementById("alertbox").innerHTML =
      "<p>Email is not valid. Please format like kristoffer@example.com</p>";
    return false;
  } else {
    return true;
  }
}
