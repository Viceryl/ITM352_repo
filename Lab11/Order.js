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


}

