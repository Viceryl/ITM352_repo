let fs = require('fs')

let filename = "user_data.json";

let data = fs.readFileSync(filename, 'utf-8')

let user_reg_data= JSON.parse(data)

console.log(user_reg_data['kazman'].password) 

let express = require('express');
let app = express();
//

username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8')

console.log(user_reg_data['zz'])


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




app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form
let new_user = request.body.username;

let errors=false;
let response_msg=" ";
if (typeof user_reg_data[new_user]!='undefined'){
    console.log(typeof user_reg_data[new_user])
    response_msg ='username taken';
    errors=true
} else if (request.body.password ==request.body.repeat_password){

user_reg_data[new_user]={}
user_reg_data[new_user].name=request.body.name
user_reg_data[new_user].password=request.body.password
user_reg_data[new_user].email=request.body.email

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8')

console.log(user_reg_data[new_user])
console.log(user_reg_data[new_user])


} else {
    response_msg ='password does not match'
    errors=true;
}

if (errors) {
    response.send(response_msg);
}else{
    response.redirect('/login')
}
 });




app.listen(8080, () => console.log(`listening on port 8080`));