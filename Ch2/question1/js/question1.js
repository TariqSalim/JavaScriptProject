// Create a webpage that inform the user to create a username for a website.
// User should be prompted  to enter his first name, last name and school's name.
//The program should createa username that consists fo the user's initials concatenated with the first word of thes chool's name.
//For example : if Hector Lopez attends Universal Community College, his username should be HLUniversal.
//comment check
function usernamecheck(){
	
var fname=document.getElementById("fname").value;



var lname=document.getElementById("lname").value;



var school=document.getElementById("school").value;

 
 school=school.split(" ");
 alert("uname is : "+fname.charAt(0)+lname.charAt(0)+school[0]);
 
}

