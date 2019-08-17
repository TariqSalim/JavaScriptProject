//Either create a new web page or add to the page you created in Programming Challenge 1. The page will act as a weather forecaster. The user will enter
//a temperature in either degrees Celsius or degrees Fahrenheit (your choice)
//and the program will display one of the following messages, depending on the temperature:
//- Less than 0 degrees F or -18 degrees C: Bundle up! It's really freezing out there!
//- 0-32F or -18-0C: Pretty cold with a chance of snow.
//- 33-59F or -17-15C: Don't forget your jacket. It's still chilli outside.
//- 60-80F or 16-27C: Perfect lovely weather...unless it rains.
//- 81-95F or 28-35C: "Nice and warm. Go for a swim.
 
 var celsius = 0, fahrenheit = 0
 
 function convtof(){
	
	
	celsius= document.getElementById("txtc").value;
	
	if(celsius<=-18) {
		
		alert("Bundle up! It's really freezing out there!")
	}
	
	else if(celsius>=-18 && celsius<=0){
		
		alert("Pretty cold with a chance of snow.")
	}
	
	else if(celsius>=-17 && celsius<=+15){
		
		alert("Don't forget your jacket. It's still chilli outside")
	}
	
	else if(celsius>=16 && celsius<=27){
		
		alert("Perfect lovely weather...unless it rains.")
	}
	
	else if(celsius>=28 && celsius<=35){
		
		alert("Nice and warm. Go for a swim.")
	}
		
		

}
