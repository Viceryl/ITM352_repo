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
return errorMessage;

}

