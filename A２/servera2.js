// declare express and nodee tools
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const qs = require('qs');

app.use(express.static(__dirname + '/public')); // express use public directory

//
let temp_user; //tempstorage for user inputs to be passed along see slide 10, send 
//

//Create path for all requests to log requests
app.all('*', function (request, response, next) { 
    console.log(request.method + ' to ' + request.path);
    next();
});

//call product.js from products.json
const products = require(__dirname + '/products.json');
app.get('/products.js', function (request, response, next) {
    response.type('.js');
    const products_str = `let products = ${JSON.stringify(products)};`;
    response.send(products_str);
});



////Update sold data on key/////////////
app.get('/sold', function (request, response,) { //make get route

let Nsold=[]     //gather sold data in array
for(i in products){
  Nsold.push(products[i].qty_sold)
}
  response.send(Nsold); //send array back to page as string
});

////Update stock data on key/////////////
app.get('/stock', function (request, response,) {//make get route

  let Nstock=[]    //gather stock data as array
  for(i in products){
    Nstock.push(products[i].qty_available)
  }
  response.send(Nstock); //send array to back to RPD.js as a string
});


//Process purchase
app.post("/process_purchase", function(request, response){//set up request path

  //declare key variables
  let POST=request.body;//retrive data form post
  let hasqty = false;
  let errorObject=[];

//loop input validation
  for (let i in products){
      let qty=POST[`qty${i}`];
      hasqty = hasqty||(qty>0);
      let errormessage = Validateinput(qty, Number(products[i].qty_available))
    
    if (errormessage.length>0){
    errorObject.push(errormessage)// gather error meassage in an array
    }
    }
  //Determine redirect location
    if (hasqty== true && Object.keys(errorObject).length == 0){
      for (let i in products){
        let temp_user=POST[`qty${[i]}`];
/*
        products[i].qty_sold+=Number(qty)
        products[i].qty_available=products[i].qty_available - qty;*/
      }
      let params = new URLSearchParams(temp_user);
      response.redirect(`/login.html& + ${params.toString()}`); //redirect to login 
    } 

    else {
      response.redirect("./RPD.html?" + qs.stringify(POST)); //redirect to Products page if error
    }

  }
)


app.listen(8080, () => console.log('Listening on port 8080'));

//validation function clientside
function Validateinput(quantity){
    quantity=Number(quantity)
    if (isNaN(quantity)) {
        return "Not a number";
      } else if (quantity < 0 && !Number.isInteger(quantity)) {
        return "Negative non-integer inventory";
      } else if (quantity < 0) {
        return "Negative inventory";
      } else if (!Number.isInteger(quantity)) {
        return "Non-integer";
      } else {
        return ""; // no errors
      };
    }


    //

    //