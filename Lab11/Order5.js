
//Order4.js 

function formSubmission(){
    //get value from form textbox - convert to number - Assign it to easy variable
    let quantity= Number(document.querySelector('input[name="qty_textbox"]').value);
    
    let validationMessage = ValidateQuantity(quantity);

    if (validationMessage!==" "){
        document.getElementById("invalidQuantity").innerHTML=validationMessage;

    } else {
        //redirect to display product purchase
        window.location.href=`display_purchase.html?qty_textbox=${quantity}`;
        //let message= `Thank you for ordering ${quantity} things!`;document.body.innerHTML= message;
    };


    return false;//prevents form submission cuse of redirection}
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


