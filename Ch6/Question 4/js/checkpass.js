/*  Add a username and passwrod to programming challenge 2. the username should be bbetween 4 and 20 characters.
the password should be between 4 and 12 characters, contain at least one digit, and contain at least one uppercase and one lowercase character.
select four special characters and require that the password contain at least one of them. Save your page as signin_3.html and be sure
to include an appropriate page title
*/

function validatepass()
{
  //alert("inside fun");
  let pass = document.getElementById("pass").value;
  let capital = document.getElementById("capital");
  let ucase = document.getElementById("ucase");
  let lcase = document.getElementById("lcase");
  let digit = document.getElementById("digit");
  let len = document.getElementById("len");
  let specialchar=document.getElementById("specialchar");
  //alert("Entered phone number is :"+phone);

  console.log("password is :"+pass);

  // Validate lowercase letters in pass
  let lowerCaseLetters = /[a-z]/g;
  if(pass.match(lowerCaseLetters)) {
    lcase.classList.remove("invalid");
    lcase.classList.add("valid");
  } else {
    lcase.classList.remove("valid");
    lcase.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(pass.match(upperCaseLetters)) {
    ucase.classList.remove("invalid");
    ucase.classList.add("valid");
  } else {
    ucase.classList.remove("valid");
    ucase.classList.add("invalid");
  }

  let schar = /[$,@,&,*]/g;
  if(pass.match(schar)){
    specialchar.classList.remove("invalid");
    specialchar.classList.add("valid");

  }
else {
  specialchar.classList.remove("valid");
  specialchar.classList.add("invalid");
}

  //validate lenngth of pass
  if(pass.length>=4 && pass.length<=12)
  {
    len.classList.remove("invalid");
    len.classList.add("valid");
  }
  else {
    len.classList.remove("valid");
    len.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(pass.match(numbers)) {
    digit.classList.remove("invalid");
    digit.classList.add("valid");
  } else {
    digit.classList.remove("valid");
    digit.classList.add("invalid");
  }

}  // close function

/*
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
*/
