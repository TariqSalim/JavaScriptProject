/* Create a web page that uses a loop to allow a teacher to enter the following information
for all students in a class; student's name; midterm exam grade, final exam grade, homework grade,
attendance grade. the program should caluclate each student's numberic total grade based on the following formula:
grade= (midterm * 0.3)+(final*0.4) + (homework*0.2) +(attendance*0.1)
Display the results in a javascript generated table as shown :
Name    attendance  homework  midterm   final Course grade
Bianca  90          85        78        92    86.2
*/

document.write("<h1 style='align:center'> Student grade </h1><br>")
let no_of_student = prompt("Please enter number of students :");
let name=[], attendance=[], homework=[], midterm=[], final=[], grade=[];

document.write("<table width='100%'> <tr> <th> Name </th> <th> Attendance </th> <th> Homework </th> <th> Midterm </th> <th> Final </th> <th> Course Grade </th>")

for (let i=0; i<no_of_student; i++)  // for storing & displaying student data in Arrays
{
  name[i]=prompt("Student_Name:");
  document.write("<tr> <td>"+name[i]+"</td>");

  attendance[i]=prompt("Attendance:");
  document.write("<td>"+attendance[i]+"</td>");

  homework[i]=prompt("Homework:");
  document.write("<td>"+homework[i]+"</td>");

  midterm[i]=prompt("Midterm Exam:");
  document.write("<td>"+midterm[i]+"</td>");

  final[i]=prompt("Final Exam:");
  document.write("<td>"+final[i]+"</td>");

  grade[i] = (final[i]*0.4)+(midterm[i]*0.3)+(homework[i]*0.2)+(attendance[i]*0.1);
  grade[i]=grade[i].toFixed(2);
  document.write("<td>"+grade[i]+"</td>")
  document.write("</tr>");
}

document.write("</table>");
