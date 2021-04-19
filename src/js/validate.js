function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const form = document.getElementById("form");

  const lat = form.latitude.value;
  const long = form.longitude.value;
  var latError = document.getElementById("latError");
  var longError = document.getElementById("longError");

  var regex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  if (!regex.test(lat)) {
    latError.style.display = "inline";
    event.preventDefault();
  } else {
    latError.style.display = "none";
  }

  var regex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  if (!regex.test(long)) {
    longError.style.display = "inline";
    event.preventDefault();
  } else {
    longError.style.display = "none";
  }
}
// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
