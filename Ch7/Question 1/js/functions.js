function main_function()
{
  let question = prompt("what do you want to do ? Power, Area, Find distance");
  let result=0; num1=0; num2=0;

  if(question=="Power")
  {
    let num1 = prompt("Enter 1st number :");
    let num2 = prompt("Enter 2nd number :");
    result = power(num1,num2);
    alert(num1+" raise to "+ num2+" = "+result)
  }

  else if(question=="Area")
  {
    let base=prompt("Enter base : ");
    let height=prompt("Enter height :");
    result=area(base,height);
    alert("area of triangle with base=" +base+" & height="+height+"is :"+result)
  }

  else if(question=="Distance")
  {
    let num1=prompt("Enter number1 :")
      let num2=prompt("Enter number2 :")
    result=distance(0,num1,0,num2);
    alert("the distance from the origin to a point at coordinates("+num1+","+num2+") is "+result)

  }
}

function power(num1,num2)
{
  return Math.pow(num1,num2);
}

function area(base,height)
{
  let area = 0.5 * base * height;
  return area;
}

function distance(num1,num2,num3,num4)
{
  let a=num1-num2;
  let b=num3-num4;
  let eqn=(a*a)+(b*b);
  let dist = Math.sqrt(eqn);
  return distance;
}
