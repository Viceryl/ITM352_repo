let express = require('express');
let app = express();

app.use(express.urlencoded({ extended:true}));

let cookieParser = require('cookie-parser');

app.get('/set_cookie', (req, res) =>{
    res.cookie('username', 'victor')
    res.send('cookie has been said with your name')
})

app.get('/use_cookie', (req, res)=>{
    let username = request.cookie.username;
    res.send(`welcome to the Use cookie page, ${username}`);
})

