let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req,res){
    res.send('app .get for test was executed'); 
    console.log('app.get for test was executed');
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    //response.send(request.body); 
    let q = Number(request.body['qty_textbox']);
   console.log("the input value is" + q)
    let validationMessage = ValidationQ(q)

    if(validationMessage===" "){
        response.send(`Thank you for purchasing ${q} things!`);
    } else {
        response.send(validationMessage + '<br><br>' + `Error: ${q} is not a quantity. Hit the back button to fix.`);
    }

 });

app.all('*', function (request, response, next) { 
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path)
});
 

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

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