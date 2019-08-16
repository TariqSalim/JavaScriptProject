// Create a web page that informs the uder whether or not a person is old enough to vote.
//the user should be prompted to enter the age of the person in question. if the age is 18 or older then the output should read "youcan vote. "
//if the person is younger than 18 then the output should read "you are too young to vote." use the conditional operator in your java script program 

 let user_input= prompt("Please Enter Your Age:")
 
	if(user_input >= 18){
		console.log("You Can Vote")
	}
	
	else{
		
	console.log("You Are Too Young To Vote")
	}