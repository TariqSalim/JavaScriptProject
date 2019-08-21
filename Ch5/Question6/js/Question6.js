// Create a web page that allows the user to toss a con as often as desired. use the Math.random() function to determine the result, where 0 = heads and
// 1 = tails. If the user's guess matches the computer's toss, the user wins. Use the coin image in the Student Data Files to display the winning result.






function TossCoin(){
	
	let str = prompt("how many times do you want to toss coin")
	let output = [], input = []
	
	for(let i = 0; i <str; i++){
		output.push(Math.floor((Math.random() * 2)))
		input[i] = prompt("What's your call, Heads i.e 0 or Tails i.e 1 ?")
		
		if (input[i] == output[i]){
					//document.getElementById("msg").innerHTML="YOU WIN! IT'S HEADS!"
					document.write("YOU WIN! IT'S HEADS!")
					//document.getElementById("output").innerHTML="Result of toss :"+"<img src='Images/heads.jpg' height='250' width='200'>"
					document.write("Result of toss :"+"<img src='Images/heads.jpg' height='250' width='200'><br>")
	}//close this if
	else {
		//document.getElementById("msg").innerHTML="YOU LOSE! IT'S TAILS!"
		document.write("YOU LOSE! IT'S TAILS!")
		//document.getElementById("output").innerHTML="Result of toss :"+"<img src='Images/tails.jpg' height='250' width='200'>"
		document.write("Result of toss :"+"<img src='Images/tails.jpg' height='250' width='200'><br>")
		}// close else
	} // close for


			console.log(output)

} // close function