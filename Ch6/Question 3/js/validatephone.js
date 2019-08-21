/*  Create a sign-in page for a website. The page should obtain the following information : The user's first name and last names,
street address, city, state, zip code, email address, and phone number. the phone number should be entered in the form (XXX)XXX-XXXX(where X is a digit).
Validate the phone number entry to ensure taht the user has entered 10 digits with the area code in parentheses and the three-digit extension is separated from the last four digits by a hyphen.
Save your page as sign_in.html and be sure to include an appropriate page title.
*/

function validatephone()
{
  //alert("inside fun");
  let phone = document.getElementById("phone").value;
  //alert("Entered phone number is :"+phone);

console.log("phone number is :"+phone.charAt(0));

 if(phone.charAt(0)=="(" &&
    phone.charAt(4)==")" &&
    phone.charAt(8)=="-" &&
    phone.length==13
   )

  {
    alert("Phone Numer is validated")
  }
  else {
    alert("Incorrect Phone number format. Follow format as per example..");
  }

}
