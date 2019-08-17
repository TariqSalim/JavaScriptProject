

let sec = 10
function blastOff()
{
	if(sec>=0){
	
	document.write("<img src='Images/rocket.gif'>")
	
	document.getElementById("output").innerHTML=sec
	
//console.log(sec)
	
	}
	
	sec--
	
	}

function btnclick(){



	setInterval(function() {
		blastOff();
	}, 1000)
	
	
}

