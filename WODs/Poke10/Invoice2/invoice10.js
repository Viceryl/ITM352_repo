/*  you will create a sales receipt for a sale that contains at least five different products (with prices of your choosing). You must use expressions and variables to compute the various needed values dynamically. That is, do not “hard code” the computations. You should be able to change the variable values and the sales receipt will compute the correct values.
*/

//Original code attempt//
/*
//Poke 10 Exprice calc
import { itemData, quantity } from "./productData.js";

for(let i=0;i<itemData.length;i++){
   generateItemRows(this)
 

function ValidationQ(quantity){
   if(isNaN(quantity)){
      return "Not number";
   }else if (quantity<0&&!Number.isInteger(quantity)){
         return "Neg-non integer inventory";
      }else if (quantity<0){
         return "neg inventory";
      }else if (!Number.isInteger(quantity)){
         return "non-interger";
            } else{
         return " ";//no errors
      }
   } 
   //gpt code
function calculateExtendedPrice(product, itemQ) {
  return product.price * itemQ;
}// gpt
  
function generateItemRows(){
   let table = document.getElementById(`invoiceTable`);
   table.innerHTML='';

   let haserrors=false ;
   for(let i=0; i<itemData.length; i++){
 let product =itemData[i];
 let itemQ = quantity[product.quantityID];

 let validationM=ValidationQ(itemQ);

 if(validationM !==" "){
   haserrors=true;
   let row =table.insertRow();
   row.insertCell(0).innerHTML= product.item;
   row.insertCell(1).innerHTML= validationM;
 }else if (itemQ>0){
  // calc ex
  let extendPrices=[];
  let subtotal=0;
  
  for(let i=0;i<itemData.length;i++){

  let product=itemData[i];
  let itemQ=quantity[i];
  //let extendedprice=product.price*itemQ;
 let extendedprice = calculateExtendedPrice(product, itemQ);
  subtotal+=extendedprice;
  extendPrices.push(extendedprice);
   document.getElementById("subtotal_cell").innerHTML="$" + subtotal;
  
}
//create rows
   let row = invoiceTable.insertRow();
   row.insertCell(0).innerHTML = product.item; 
   row.insertCell(1).innerHTML = itemQ ;
   row.insertCell(2).innerHTML = `$`+ itemData[i].price.toFixed(2);
   row.insertCell(3).innerHTML = `$`+extendPrices[i].toFixed(2);

 }
   }

}
}


/*

document.getElementById("subtotal_cell").innerHTML="$" + subtotal;


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

//calculate Grand total
let total=tax+subtotal+shipping;

//Display Grand total
document.getElementById("total_cell").innerHTML="$"+total.toFixed(2);
*/
/*   
 // item row 1
 let row = invoiceTable.insertRow();
 row.insertCell().innerHTML = item1; 
 row.insertCell().innerHTML = quantity1;
 row.insertCell().innerHTML = "$"+price1.toFixed(2);
 row.insertCell().innerHTML = "$"+extendPrice1;
*/

//Chat GPT restructured code, for organization (so it doesn't look like a complete mess also added better comments) and and some improvements

import { itemData, quantity } from "./productData.js";

// Validation function to check quantity
function ValidationQ(quantity) {
  if (isNaN(quantity)) {
    return "Not a number";
  } else if (quantity < 0 && !Number.isInteger(quantity)) {
    return "Negative non-integer inventory";
  } else if (quantity < 0) {
    return "Negative inventory";
  } else if (!Number.isInteger(quantity)) {
    return "Non-integer";
  } else {
    return " "; // no errors
  }
}

// Function to generate item rows and calculate subtotal
function generateItemRows() {
  let table = document.getElementById("invoiceTable");
  table.innerHTML = ''; // Clear the table first

  let subtotal = 0; // Initialize the subtotal to zero

  for (let i = 0; i < itemData.length; i++) {
    let product = itemData[i];
    let itemQ = quantity[product.quantityID];

    let validationMsg = ValidationQ(itemQ);

    if (validationMsg === " ") {
      // If no validation error and quantity is positive
      if (itemQ > 0) {
        let extendedPrice = product.price * itemQ;
        subtotal += extendedPrice; // Add extended price to subtotal

        // Add a row to the table for the valid item
        let row = table.insertRow();
        row.insertCell(0).innerHTML = product.item;
        row.insertCell(1).innerHTML = itemQ;
        row.insertCell(2).innerHTML = `$${product.price.toFixed(2)}`;
        row.insertCell(3).innerHTML = `$${extendedPrice.toFixed(2)}`;
      }
    } else {
      // If there's a validation error, add a row with the error message
      let row = table.insertRow();
      row.insertCell(0).innerHTML = product.item;
      row.insertCell(1).innerHTML = validationMsg;
    }
  }

  // Update the subtotal in the "subtotal_cell" element
  document.getElementById("subtotal_cell").innerHTML = `$${subtotal.toFixed(2)}`;


//end Chat gpt restructure


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

//calculate Grand total
let total=tax+subtotal+shipping;

//Display Grand total
document.getElementById("total_cell").innerHTML="$"+total.toFixed(2);
}

generateItemRows(); // Call the function to start processing.
//Chat GPT end

