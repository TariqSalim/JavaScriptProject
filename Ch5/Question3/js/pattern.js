// Create a webpage that displays three designs and allow the user to select a design and a message to go
// with the design. Then prompt the user for the necessary information to create the design, as well as the message,
//and display it. If you want you can restrict the number of characters allowed in the user's message so the design
// displays nicely. The designs, with sample messages are shown below. Save your page as designs.html and be sure to include
// an appropritate title.


let char = prompt("Enter the desired character for creating pattern:");
let text=prompt("Enter a word :");
let textlen = text.length;
alert("length of txt is :"+textlen);

let rows = 8;

for(let i=1; i<=rows; i++)
{
  for(let k=1; k<=(rows-i); k++) // loop for adding spaces
  {
   document.write("&nbsp;");
  }
  for(let j=1; j<=i; j++) // loop to print * or character
  {
    if(j==3 && i==5)
    {
      document.write(text);
    }
    else {
        document.write(" "+char+" ");
    }

  }
 document.write("<br>");
}

document.write("<br>");


//2nd pattern starts
for(let i=1; i<=rows; i++)
{
  for(let k=1; k<=(rows-i); k++) // loop for adding spaces
  {
   document.write("&nbsp;");
  }
  for(let j=1; j<=i; j++) // loop to print * or character
  {
    if(j==5 && i==8)
    {
      document.write(text);
    }

    else {
          document.write(" "+char+" ");
    }

  }
 document.write("<br>");
}
for(let i=rows; i>=1; i--)
{
  for(let k=rows-i; k>=1; k--) // loop for adding spaces
  {
   document.write("&nbsp;");
  }
  for(let j=1; j<=i; j++) // loop to print * or character
  {
        document.write(" "+char+" ");
  }
 document.write("<br>");
}



// 2nd pattern starts
/*
let count = rows - 1;
    for (let k = 1; k <= rows; k++) {
          for (let i=1; i <= count; i++) // loop for adding space
            {
                document.write("&nbsp; ");
            }
          count=count-1;

            for (let i=0; i<=2*(k - 1); i++)
            {
                document.write(" "+char+" ");
            }
            document.write("<br>");
        }

        //now starting loop for reverse
        count = 1;
        for (let k=1; k <= rows-1; k++) {
            for (let i = 1; i<=count; i++)
            {
                document.write("&nbsp; ");
            }
            count++;
            for (let i = 1; i <= 2*(rows-k)-1; i++)
            {
              if((i==8))
              {
                document.write(text);
              }
              else {
                document.write(" "+char+" ");
              }

            }

            document.write("<br>");
        }
        */
