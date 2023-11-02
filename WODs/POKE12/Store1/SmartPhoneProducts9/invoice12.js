import { itemData, /*quantity*/} from "./productData.js";




let params = (new URL(document.location)).searchParams;
let quantity = []
//
// Function to parse URL parameters and store them in the 'quantity' array
function parseURLParameters() {
  let params = new URLSearchParams(window.location.search);

  for (let i = 0; i < itemData.length; i++) {
    let paramName = `X${i}`;
    //let paramValue = parseInt(params.get(paramName));
    let paramValue = parseFloat(params.get(paramName));

    // Check if the parameter exists and is a valid number
    //if (!isNaN(paramValue) && paramValue >= 0) {
      if(isNaN(paramValue)){
        paramValue=0
        quantity.push(paramValue);
      } else{
      quantity.push(paramValue);}
    //} 
    /*else {
      quantity.push(0); // Set a default value if the parameter is missing or invalid
    }*/
  }
}

// Call the function to parse URL parameters and populate the 'quantity' array
parseURLParameters();

// Now you can use the 'quantity' array to populate your table
generateItemRows();

//

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


