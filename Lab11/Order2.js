
function updateQuantityMessage(textbox){
    let qntmessage=document.getElementById('qty_textbox_message')

    //validate the quentity entered
    let validationmessage = ValidateQuantity(Number(textbox.value))
    //If there are validation errors, Display validation error
    if(validationmessage !==" ") {
        qntmessage.innerHTML = validationmessage
    } else{
        qntmessage.innerHTML=textbox.value;
    }
}


function ValidateQuantity(quantity){
    let errorMessage = " ";

    //switch to value if the case Parm is true
    switch (true){
        case isNaN(quantity):
        errorMessage= "Thats Not a number";
        break;
        case quantity<0&&!Number.isInteger(quantity):
            errorMessage= "Bro thats all wrong man. It has to be an integer above zero";
        break;
        case quantity<0:
        errorMessage ="We don't accept Negatives";
        break;
        case quantity==0:
        errorMessage ="Zero not allowed";
        break;
        case !Number.isInteger(quantity):
            errorMessage="Non Interger alert";
            break;
        default:
            errorMessage=" ";//noerror
            break; 
    }
return errorMessage; // return value after processing switch statement

}

function displayPurchase() {
let quantity=Number(document.getElementById('qty_textbox').value); //ID the number in Text box.; (getELID(find element named)-"qty_textbox"-from the "document (html page)" - ensure as number - set value to quantity variable

let validationMessage = ValidateQuantity(quantity);  // Call upon "ValidateQuantity" Function and input value from "quantity" local variable - assign output to "validationMessage" varible

//Depending on value from validationmessage/ process Ty or alert error
if (validationMessage==" "){
    let message = `Thank you for ordering ${quantity} things!`;
    document.body.innerHTML=message;
}else {
    alert (validationMessage + ". please enter a positive quantity.")
document.getElementById('qty_textbox').value=" ";
}
}