


let fs = require('fs')

let filename = "user_data.json";

let data = fs.readFileSync(filename, 'utf-8')

let user_reg_data= JSON.parse(data)

console.log(users_reg_data['kazman'].password) 

let express = require('express');
let app = express();

//
app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

    let UserNenter = request.body['username']
    let PassEnter = request.body['password']

    let response_message = " "
    let errors=false

    //check ussrN
    if(typeof user_reg_data[UserNenter] !='undefined'){
        //check pass
        if ( PassEnter == user_reg_data[UserNenter].password){
            response_message = `${UserNenter} is logged in`
        }else{
            response_message=`incorrect pass`
            errors = true
        }
    } else {
        response_message = 'username not found';
        errors = true;
    }

    if (!errors){
        response.send(response_message);
    } else {
        response.redirect(`./login?error=${response_message}`)
    }



});

app.listen(8080, () => console.log(`listening on port 8080`));