

let sec = 10
<<<<<<< HEAD
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



=======
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
>>>>>>> 8edc5cdb91026ba9957588949c0d9add4a89750f
	setInterval(function() {
		blastOff();
	}, 1000)
	
	
}

