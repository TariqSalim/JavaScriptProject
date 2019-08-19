let numbers =prompt("How many numbers do you want to input?");
let evenArray=[], oddArray=[], item=0;
let evensum=0, oddsum=0; oddavg=0, evenavg=0;

for (let i=0; i<numbers; i++)
{
  item=parseInt(prompt("Enter Number:"));
  if(item%2==0)
  {
     evenArray.push(item);
     evensum=evensum+item;
  }
  else {
      oddArray.push(item);
      oddsum=oddsum+item;
  }
}
evenavg=(evensum/evenArray.length); // limits decimals to 2 places.
oddavg=(oddsum/oddArray.length);

console.log("Even array is :"+evenArray);
console.log("Sum of Even array items is:"+evensum);
console.log(" Avg of Even array items is:"+evenavg);

console.log("Odd array is:"+oddArray);
console.log("Sum of Odd array items is:"+oddsum);
console.log(" Avg of Odd array items is:"+oddavg);
