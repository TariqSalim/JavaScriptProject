//Create a web page that will take a survey of music preferences. list five types of
//music and have the user rate each type from 1 to 5 with 1 being the favourite and 5 being the least liked. Include options for the user's age( you can make thses age ranges,
//such as under 20, 20-30, and so on) and gender. The survey should be returned to you by email. 


function FavMusic(){
	
	let country = document.getElementById("country").value;
	let jazz = document.getElementById("jazz").value;
	let rock = document.getElementById("rock").value;
	let hiphop = document.getElementById("hiphop").value;
	let pop = document.getElementById("pop").value;
	let age = document.getElementsByName("age")
	let gender = document.getElementsByName("gender")
	
	
	let selected_age=0, selected_gender=0
	
	for(let i=0; i<=3;i++){
		
		if(age[i].checked){
			
			selected_age=age[i].value
		}
		
	}
	
	for(let g=0; g<=2;g++){
		
		if(gender[g].checked){
			
			selected_gender=gender[g].value
		}
		
	}
	document.getElementById("output").innerHTML = "your ratings are<br>counrty:"+country+"<br>rock:"+rock+"<br>jazz:"+jazz+"<br>pop:"+pop+"<br>hiphop:"+hiphop+"<br>age:"+selected_age+"<br>gender:"+selected_gender
	
}

