

let sec = 10
function blastOff(){
		if(sec>=0){
			document.getElementById("output").innerHTML=sec

		if (sec == 0){	
			document.getElementById("output").innerHTML="<img src='Images/rocket.gif'>"
		}
	}	
	sec--	
	}

function btnclick(){
	setInterval(function() {
		blastOff();
	}, 1000)
	
	
}

