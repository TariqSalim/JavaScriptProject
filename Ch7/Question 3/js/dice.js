/*
Create a page that allows the user to play a game with the computer. 
In this game, the player will roll 2 dice and the computer will roll two
dice. The Math.random() method will be used to generate each roll of a die,
 from 1 to 6. the sum of computer's roll should be compared to the sum of
 the player's
roll and whoever has the greater sum is the winner of that round. the sum of
 winner's roll for that round should be added to his or her point total. 
 Use functions to call for each rol of two dice and the sum
for keeping track of the points, and to allow the player to continue or 
quit after a round of play. the following are the game rules:
1. If one player rolls doubles (i.e fours or two sixes,etc) and is a winner 
for that round, he should get double points.
2. If one player rolls doubles but is not a winner, nothing special happens.
3.If the two sums for any round are a tie, no one gets anny points.
4. The game ends when either player reaches at least 100 points or when
 the human player wants to quit.
*/


let sum1=0, trial2=0,user_points=0, comp_points=0;
user_msg="";
comp_msg="";

function main_function()
{
	while(user_points <= 100 && comp_points <=100 && user_input == "y"){
		
		let user_sum=0, comp_sum=0
		
	
			
			 user_sum = user_dice()
			 comp_sum = comp_dice()
			 
			 user_points= user_points + user_sum
			 comp_points= comp_points + comp_sum
			 
			 console.log("comp total - " + comp_points)
			 console.log("user total - " + user_points)
		
		
		
			 //document.getElementById("comppoints").innerHTML = "Your 2 dice roll resulted in :"+trial1+" & "+trial2+" making a total of :"+sum1;
			 document.getElementById("comppoints").innerHTML = comp_msg
			 document.getElementById("userpoints").innerHTML =user_msg
		
		
	}
	
	
	if(user_points > comp_points){
		console.log("user win")
	}
	else{
		console.log("comp win")

	}
		

 
  
}

function user_dice()
{
  trial1=Math.floor((Math.random() * (6 - 1) + 1))
  trial2=Math.floor((Math.random() *  (6 - 1) + 1))

    if(trial1==trial2)
    {
      sum1=2*(trial1+trial2)
    }
    else{
      sum1=(trial1+trial2);
    }
	user_msg = user_msg + "<br>" + "Total of 2 rolls by user"+trial1 +"& "+trial2+"which makes:"+sum1
    //alert("Total of 2 rolls by user"+trial1 +"& "+trial2+"which makes:"+sum1)
  
  return sum1;
}

function comp_dice()
{
  trial1=Math.floor((Math.random() * (6 - 1) + 1))
  trial2=Math.floor((Math.random() *  (6 - 1) + 1))

    if(trial1==trial2)
    {
      sum1=2*(trial1+trial2)
      //alert("total of comp 2 dice is:"+sum1)
    }
    else{
      sum1=(trial1+trial2);
    }
    comp_msg = comp_msg + "<br>" + "Total of 2 rolls by comp"+trial1 +"& "+trial2+"which makes:"+sum1
 
  return sum1;
}
