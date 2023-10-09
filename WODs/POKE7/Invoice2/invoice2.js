/*  you will create a sales receipt for a sale that contains at least five different products (with prices of your choosing). You must use expressions and variables to compute the various needed values dynamically. That is, do not “hard code” the computations. You should be able to change the variable values and the sales receipt will compute the correct values.

*/
// Product Data

// Product 1
let item1 = 'Cat';
let quantity1 = 2;
let price1 = 6;

// Product 2
let item2 = 'Dog';
let quantity2 = 2;
let price2 = 8;

// Product 3
let item3 = 'Tanuki';
let quantity3 = 2;
let price3 = 8;

// Product 4
let item4 = 'Fox';
let quantity4 = 2;
let price4 = 4;

// Product 5
let item5 = 'Bird';
let quantity5 = 2;
let price5 = 5;


// Compute extended prices
let extendPrice1= quantity1*price1;
let extendPrice2= quantity2*price2;
let extendPrice3= quantity3*price3;
let extendPrice4= quantity4*price4;
let extendPrice5= quantity5*price5;

//compute subtotal
let subtotal= extendPrice1+extendPrice2+extendPrice3+extendPrice4+extendPrice5;

//display subtotal
document.getElementById("subtotal_cell").innerHTML="$" + subtotal;


//calculate sales tax
let tax=subtotal*0.0575;

//Display tax
document.getElementById("tax_cell").innerHTML="$"+tax.toFixed(2);

//Determine Shipping
let shipping=0
if (subtotal<50){shipping=2}
if (50<=subtotal&&subtotal<100){shipping=5}
if (subtotal>100){shipping=subtotal*0.05}

//Display Shipping
document.getElementById("shipping_cell").innerHTML="$"+shipping.toFixed(2);

//calc Grand total
let total=tax+subtotal+shipping;

//Display Grand total
document.getElementById("total_cell").innerHTML="$"+total.toFixed(2);


 // item row 1
 let row = invoiceTable.insertRow();
 row.insertCell().innerHTML = item1; 
 row.insertCell().innerHTML = quantity1;
 row.insertCell().innerHTML = price1.toFixed(2);
 row.insertCell().innerHTML = extendPrice1;

  // item row 2
row = invoiceTable.insertRow();
  row.insertCell().innerHTML = item2; 
  row.insertCell().innerHTML = quantity2;
  row.insertCell().innerHTML = price2.toFixed(2);
  row.insertCell().innerHTML = extendPrice2;

   // item row 3
row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item3; 
   row.insertCell().innerHTML = quantity3;
   row.insertCell().innerHTML = price3.toFixed(2);
   row.insertCell().innerHTML = extendPrice3;

    // item row 4
row = invoiceTable.insertRow();
    row.insertCell().innerHTML = item4; 
    row.insertCell().innerHTML = quantity4;
    row.insertCell().innerHTML = price4.toFixed(2);
    row.insertCell().innerHTML = extendPrice4;

     // item row 5
row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item5; 
   row.insertCell().innerHTML = quantity5;
   row.insertCell().innerHTML = price5.toFixed(2);
   row.insertCell().innerHTML = extendPrice5;