/* Create a web page that allows the user to evaluate his or her car's performance on
various trips. The user should be allowed to enter as many data sets as desired. For each set
the following information will be entered; the name of the trip, the number of miles driven and
the number of gallons of gas used. The output should be put into a javascript generated table and look
like this:
Trip Name     Miles Driven    Gallons used  Miles per gallon
Disney world             85        78            86.2
*/

document.write("<h1 align='center'> Vehicle Fuel Economy </h1><br>")
let no_of_trips = prompt("Please enter number of trips you had on your car :");
let tripname=[], mDriven=[], gUsed=[],mpg=[];

document.write("<table width='100%'> <tr> <th> Trip Name </th> <th> Miles Driven </th> <th> Gallons used </th> <th> Miles per Gallons </th></tr>")

for (let i=0; i<no_of_trips; i++)  // for storing and displaying trip data in Arrays
{
  tripname[i]=prompt("Trip Name :");
  document.write("<tr> <td align='center'>"+tripname[i]+"</td>");

  mDriven[i]=prompt("Miles Driven on "+tripname[i]+" trip :");
  document.write("<td align='center'>"+mDriven[i]+"</td>");

  gUsed[i]=prompt("Gallons of Gas used on "+tripname[i]+" trip :");
  document.write("<td align='center'>"+gUsed[i]+"</td>");

  mpg[i]=mDriven[i]/gUsed[i]; // calculate miles per gallon
  mpg[i]=mpg[i].toFixed(2); // limits decimal to 2 places.
  document.write("<td align='center'>"+mpg[i]+"</td> </tr>");
}

document.write("</table>");
