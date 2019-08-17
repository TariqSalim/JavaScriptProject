//Create a web page that acts as a temperature converter. The user should be given the option to enter the temperature in degrees fahrenheit and the program will
//convert the temperature to dgress Celsius. Alternatively, the user can enter the temperature in Celsius and the program will convert the temperature to degrees Fahrenheit.


function convtof(){
	
var celsius= document.getElementById("txtc").value;

	 celsius=(celsius * 9/5) + 32;
	 celsius=celsius.toFixed(2);
	document.getElementById("txtf").value = celsius;
}

function convtoc(){ 
	
	var fahrenheit= document.getElementById("txtf").value;
	
	fahrenheit = 5/9 * (fahrenheit - 32);
	fahrenheit= fahrenheit.toFixed(2);
	document.getElementById("txtc").value = fahrenheit;
}
