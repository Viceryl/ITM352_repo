function updateQntMessage(textbox){
    let qntmessage=document.getElementById('qty_textbox_message')

    //validate the quentity entered
    let validationmessage = ValidateQuantity(number(textbox.value))
    //Display validation error
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
        errorMessage= "Not a number";
        break;
        case quantity<0&&!Number.isInteger(quantity):
            errorMessage= "Not a number";
        break;
        //Case quantity<0
        //errorMessage ="bruh";
        //break;
        default:
            errorMessage=" ";//noerror
    }
    return errorMessage;
}

function displaypurchase(){
    let quantity = number(document.getElementById('qty_textbox').value);

    let validationmessage=ValidateQuantity(quantity);

    if (validationmessage == " "){
        let message =`thank u for ordering ${quantity} things!`;
        document.body.innerHTML=message;
    } else{
        alert(validationmessage + " Please enter a positive integer for quantity")
        document.getElementById('qty_textbox').value=" ";
    }
}