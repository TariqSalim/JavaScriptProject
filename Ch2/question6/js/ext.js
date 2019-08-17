// Javascript

let x=8;
let y=3;
let z=5;

function checkfun1()
{
    alert((x>5)&& (x<10) == !(x<=5) || !(x>=10))
}


function fun2()
{
   alert(![(x > y) && (y < z)] == !(x > y) || !(y < z))
}

function checkfun3()
{
  alert ((x==y) || (x>y) == (x==y) && (x<y))
}

function checkfun4(){
  alert(![z<x] || (z<y) == !(z<x) && !(z<y))
}
