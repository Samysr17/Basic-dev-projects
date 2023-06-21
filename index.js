function validateForm() {
  // Personal Information
  var name = document.forms["registrationForm"]["name"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var mobileNumber = document.forms["registrationForm"]["mobileNumber"].value;
  var dob = document.forms["registrationForm"]["dob"].value;

  // Educational Information
  var xMarks = document.forms["registrationForm"]["xMarks"].value;
  var xiiMarks = document.forms["registrationForm"]["xiiMarks"].value;

  // Payment Details
  var paymentMethod = document.forms["registrationForm"]["paymentMethod"].value;
  var cardNumber = document.forms["registrationForm"]["cardNumber"].value;
  var upiID = document.forms["registrationForm"]["upiID"].value;

  var isValid = true;
  var errorMessages = "";

  // Personal Information Validation
  var nameRegex = /^[a-zA-Z ]+$/;
  if (!name.match(nameRegex)) {
    errorMessages += "Name must not contain digits or special characters.\n";
    isValid = false;
  }

  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailRegex)) {
    errorMessages += "Invalid email address.\n";
    isValid = false;
  }

  var mobileRegex = /^[789]\d{9}$/;
  if (!mobileNumber.match(mobileRegex)) {
    errorMessages +=
      "Mobile number must be 10 digits and start with 7, 8, or 9.\n";
    isValid = false;
  }

  var dobDate = new Date(dob);
  var currentDate = new Date();
  var age = Math.floor(
    (currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000)
  );
  if (age <= 18 || age >= 25) {
    errorMessages += "Age should be between 18 and 25.\n";
    isValid = false;
  }

  // Educational Information Validation
  if (xMarks === "") {
    errorMessages += "X Marks is mandatory.\n";
    isValid = false;
  }

  if (xiiMarks === "") {
    errorMessages += "XII Marks is mandatory.\n";
    isValid = false;
  }

  // Payment Details Validation
  if (paymentMethod === "card") {
    var cardRegex = /^\d{16}$/;
    if (!cardNumber.match(cardRegex)) {
      errorMessages += "Invalid card number.\n";
      isValid = false;
    }
  } else if (paymentMethod === "upi") {
    var upiRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;
    if (!upiID.match(upiRegex)) {
      errorMessages += "Invalid UPI ID.\n";
      isValid = false;
    }
  }

  if (!isValid) {
    alert(errorMessages);
    return false;
  } else {
    alert("From submitted successfully!");
    return true;
  }
}