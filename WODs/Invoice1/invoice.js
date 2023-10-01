/*  you will create a sales receipt for a sale that contains at least five different products (with prices of your choosing). You must use expressions and variables to compute the various needed values dynamically. That is, do not “hard code” the computations. You should be able to change the variable values and the sales receipt will compute the correct values.

*/
// Product Data

// Product 1
let item1 = 'Cat';
let quantity1 = 2;
let price1 = 1.23;

// Product 2
let item2 = 'Dog';
let quantity2 = 2;
let price2 = 1.23;

// Product 3
let item3 = 'Tanuki';
let quantity3 = 2;
let price3 = 1.23;

// Product 4
let item4 = 'Fox';
let quantity4 = 2;
let price4 = 1.23;

// Product 5
let item5 = 'Bird';
let quantity5 = 2;
let price5 = 1.23;


// Compute extended prices
let extendPrice1= quantity1*price1;
let extendPrice2= quantity2*price2;
let extendPrice3= quantity3*price3;
let extendPrice4= quantity4*price4;
let extendPrice5= quantity5*price5;

//compute subtotal
let subtotal= extendPrice1+extendPrice2+extendPrice3+extendPrice4+extendPrice5;

//calculate sales tax
