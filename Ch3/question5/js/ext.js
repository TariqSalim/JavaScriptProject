/* Create a web page like the one created in Programming Challenge 4. However, this program will calculate taxes
based on compound conditions as follows:
- No dependents and gross pay is greater than $1000.00, tax rate is 33%
- No dependents and gross pay is less than or equal to $1000.00 tax rate is 28%
- 1 to 3 dependents and gross pay is greater than $1000.000, tax rate is 25%
- 1 to 3 dependents and gross pay is less than or equal to $1000.00 : tax rate is 22%.
- 4 to 6 dependents and gross pay is greater than $1000.00, tax rate is 22%;
- 4 to 6 dependents and gross pay is less than or equal to $1000.00: tax rate is 15%.
- More than 6 dependents and gross pay is greater than $1000.00, tax rate is 15%.
- More than 6 dependents and gross pay is less than or equal to $1000.00, tax rate is 10%.
Be sure to include an appropriate title to the page.
*/


let hpay = prompt("Please enter your Hourly Pay Rate :");
let hours = prompt("Please enter the number of hours you worked per week :");
let dependents = prompt("Please enter the number of dependents :");
let taxrate=0;
let gpay=(hpay*hours)*4;

if((dependents==0) && (gpay>1000))
{
  taxrate=0.33;
  gpay=gpay-(gpay*taxrate);
}
else if((dependents==0) && (gpay<=1000))
{
taxrate=0.28;
gpay=gpay-(gpay*taxrate);
}
else if(dependents>=1 && dependents<=3 && gpay>1000)
{
  taxrate=0.25;
  gpay=gpay-(gpay*taxrate);
}
else if(dependents>=1 && dependents<=3 && gpay<=1000)
{
  taxrate=0.22;
  gpay=gpay-(gpay*taxrate);
}
else if((dependents>=4 && dependents<=6 && gpay>1000))
{
taxrate=0.22;
gpay=gpay-(gpay*taxrate);
}
else if((dependents>=4 && dependents<=6 && gpay<=1000))
{
taxrate=0.15;
gpay=gpay-(gpay*taxrate);
}

else if((dependents>6 && gpay>1000))
{
taxrate=0.15;
gpay=gpay-(gpay*taxrate);
}
else if((dependents>6 && gpay<=1000))
{
taxrate=0.10;
gpay=gpay-(gpay*taxrate);
}

alert("Your Monthly pay is :"+gpay);
