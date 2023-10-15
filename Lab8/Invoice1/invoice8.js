/*  you will create a sales receipt for a sale that contains at least five different products (with prices of your choosing). You must use expressions and variables to compute the various needed values dynamically. That is, do not “hard code” the computations. You should be able to change the variable values and the sales receipt will compute the correct values.

*/

//Lab 8 2.1
let product_quantities=[2,1,1,1,3];

//Lab 8 2.2
//alert("the size of the product array is: "+product_quantities.length)

//Lab8 2.3
product_quantities.push(3);
product_quantities.pop();

// Product Data 8.2.1

// Product 1
let item1 = 'Cat';
let quantity1 = product_quantities[0];
let price1 = 3;

// Product 2
let item2 = 'Dog';
let quantity2 = product_quantities[1];
let price2 = 9;

// Product 3
let item3 = 'Tanuki';
let quantity3 = product_quantities[2];
let price3 = 8;

// Product 4
let item4 = 'Fox';
let quantity4 = product_quantities[3];
let price4 = 7;

// Product 5
let item5 = 'Bird';
let quantity5 = product_quantities[4];
let price5 = 4;

//-----------------------------------------------------------

//Lab 8 1.1/2.1
let product1={
   itemName:'iPhone 12',
   quantity: product_quantities[0],
   price: 247.95
};

//Lab8 1.4
product1["SKU#"]=1234;
delete product1["SKU#"];

//Lab 8 1.3
product1.quantity=0;

//Lab 8 1.2
let extended_price1 =product1.price*product1.quantity


// Compute extended prices
//let extendPrice1= quantity1*price1;
let extendPrice2= quantity2*price2;
let extendPrice3= quantity3*price3;
let extendPrice4= quantity4*price4;
let extendPrice5= quantity5*price5;

//compute subtotal 8.1.2
let subtotal= extended_price1+extendPrice2+extendPrice3+extendPrice4+extendPrice5;

//display subtotal
document.getElementById("subtotal_cell").innerHTML="$" + subtotal;


//calculate sales tax
let tax=subtotal*0.0575;

//Display tax
document.getElementById("tax_cell").innerHTML="$"+tax.toFixed(2);

//calc Grand total
let total=tax+subtotal;

//Display Grand total
document.getElementById("total_cell").innerHTML="$"+total.toFixed(2);

 // item row 1 8.1.2
 let row = invoiceTable.insertRow();
 row.insertCell().innerHTML = product1.itemName; 
 row.insertCell().innerHTML = product1.quantity;
 row.insertCell().innerHTML = product1.price.toFixed(2);
 row.insertCell().innerHTML = extended_price1.toFixed(2);

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