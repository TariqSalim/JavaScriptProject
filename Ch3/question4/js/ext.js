// Javascript

 let hpay = prompt("Please enter your Hourly Pay Rate :");
 let hours = prompt("Please enter the number of hours you worked per week :");
 let dependents = prompt("Please enter the number of dependents :");
 let taxrate=0;
 let netpay=0;

 if(hours>40){
   hpay=hpay*1.5;
      if(dependents==0){
        taxrate=0.28;
      }
      else if(dependents>=1 && dependents<=3)
      {
        taxrate=0.25;
      }
      else if(dependents>=4 && dependents<=6)
      {
        taxrate=0.15
      }
      else {
        taxrate=0.10;
      }
      netpay=(hpay*hours)*4;
      netpay=netpay-(netpay*taxrate);
      //document.getElementById("finalpay").innerHTML="Your monthly netpay is:" +netpay;
      alert("Your monthly netpay is:"+netpay.toFixed(2));
  }
  else {
    if(dependents==0){
      taxrate=0.28;
    }
    else if(dependents>=1 && dependents<=3)
    {
      taxrate=0.25;
    }
    else if(dependents>=4 && dependents<=6)
    {
      taxrate=0.15
    }
    else {
      taxrate=0.10;
    }
    netpay=((hpay*hours)*4);
    netpay=netpay-(netpay*taxrate);
    //document.getElementById("finalpay").innerHTML="Your monthly netpay is:" +netpay;
    alert("Your monthly netpay is:"+netpay.toFixed(2));
  }
