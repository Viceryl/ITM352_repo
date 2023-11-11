//receipt.js

let params = (new URL(document.location)).searchParams;
let q = Number(params.get('quantity'));

let brand = products[0]['brand'];
let brand_price = products[0]['price']; 
 

let validationMessage = ValidationQ(q)

if(validationMessage===" "){
    document.getElementById('receiptContent').innerHTML=`<h2>Thank you for purchasing ${q} ${brand}. Your total is \$${q * brand_price}!</h2>`;
} else {
    Alert(validationMessage + '<br><br>' + `Error: ${q} is not a quantity. Hit the back button to fix.`);
    document.getElementById('receiptContent').innerHTML=(validationMessage + '<br><br>' + `Error: ${q} is not a quantity. Hit the back button to fix.`);
}

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
