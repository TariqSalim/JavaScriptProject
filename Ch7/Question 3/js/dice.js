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


let sum1=0, trial2=0,user_points=0, comp_points=0, num1=0,num2=0,u="u",c="c",user_pref="y";
msg="";
//comp_msg="";

function main_function()
{
	while(user_points <= 100 && comp_points <=100){

		let user_sum=0, comp_sum=0

				num1=Math.floor((Math.random() * (6 - 1) + 1)) // specified range of 1 to 6 for math.random
				num2=Math.floor((Math.random() * (6 - 1) + 1))
				num3=Math.floor((Math.random() * (6 - 1) + 1))
				num4=Math.floor((Math.random() * (6 - 1) + 1))

			 user_sum = roll(num1,num2,u)
			 comp_sum = roll(num3,num4,c)

			 if(user_sum>comp_sum)
			 {
				 user_points= user_points + user_sum
				 comp_points= comp_points + comp_sum
				 msg=msg+" <br> User Wins <br>Total Comp_score is:"+comp_points+" & User Score is:"+user_points+"<br>";
			 }
			 else if(user_sum==comp_sum)
			 {
				 msg=msg+"<br> Sum of User's roll & Computer's roll are equal <br>";
			 }
			 else {
				 user_points= user_points + user_sum
				 comp_points= comp_points + comp_sum
			 	msg=msg+"<br> Computer Wins<br> Total Comp_score is:"+comp_points+" & User Score is:"+user_points+"<br>";
			 }

			 user_pref=prompt("Do you want to continue to play ? Enter y/n");

			if(user_pref=="n")
			{

				if(user_points > comp_points){
						console.log("user finally wins")
						msg=msg+"<br> User finally wins since his total is:"+user_points+" and computer points are :"+comp_points+"<br>"
						document.getElementById("comppoints").innerHTML = msg
				}
		else{
					msg=msg+"<br> Computer finally wins since his total is:"+comp_points+" and User points are :"+user_points+"<br>"
					document.getElementById("comppoints").innerHTML = msg
			}

			break;
		} // end if
	
			 document.getElementById("comppoints").innerHTML = msg
			 //document.getElementById("userpoints").innerHTML =user_msg

	} // end while




}

function roll(para1,para2,para3)
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
		if(para3=="u")
		{
			msg = msg + "<br>" + "Total of 2 rolls by user "+trial1 +"& "+trial2+"which makes:"+sum1+"<br>"
    //alert("Total of 2 rolls by user"+trial1 +"& "+trial2+"which makes:"+sum1)
	 }
	 else {
	 	msg = msg + "<br>" + "Total of 2 rolls by comp "+trial1 +"& "+trial2+"which makes:"+sum1+"<br>";
	 }
  return sum1;
}

/*
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
    msg = msg + "<br>" + "Total of 2 rolls by comp"+trial1 +"& "+trial2+"which makes:"+sum1+"<br>"

  return sum1;
}
*/
