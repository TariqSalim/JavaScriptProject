/* Create a webpage that allows the coach of a town's soccer league to enter the ages of all the children
who have registered for the soccer this year. Children etween the age of 4&15 are allowed to signup for the
soccer bbut there can be a lot of variation in the number of children who sign up each year and their ages.
Eventually the chidren will be placed into one of the 3 leagues. Junior, Intermediate, Senior.
The junior leage is for children age 4-7, and
the Intermediate league is for children age 8-11 and
senior League is for children age 12-15.

The coach wants to know how many children will be in each group. Your program should allow the coach to enter the ages of
as many children as desired and should keep track of how many are in each group. the final display will be in each group. save your
page as soccer.html and be sure to include a page title
*/
document.write ("<h1 align='center'> Welcome to Soccer Registration </h1>")
let no_of_children=prompt("How many chidren are to be enrolled for soccer ??");
let names=[], age=0, junior=[], inter=[], senior=[];

for (let i=0; i<no_of_children; i++)
{
  names[i]=prompt("Enter name of Child :");
  age=prompt("What is "+names[i]+"'s age ??");

  if(age>=4 && age<=7)
  {
    junior.push(age);
  }
  if(age>=8 && age<=11)
  {
    inter.push(age);
  }
  if(age>=12 && age<=15)
  {
    senior.push(age);
  }

}

document.write("In Total <b>"+no_of_children+"</b> signed up for the Soccer Leagues <br>");
document.write("The junior league has "+junior.length+" students <br>");
document.write("The intermediate league has "+inter.length+" students <br>");
document.write("The senior league has "+senior.length+" students <br><br>");

document.write("Names of all 5 students are:<br>");
for(let j=0; j<no_of_children; j++)
{
  document.write(names[j]+", ");
}
