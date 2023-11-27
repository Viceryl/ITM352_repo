let fs = require('fs')

let filename = "user_data.json";



if (fs.existsSync(filename)){

    let data = fs.readFileSync(filename, 'utf-8')

    let users_reg_data= JSON.parse(data)
    
    let user_stats = fs.statSync(filename);
    
    console.log(filename+ ' has ' + user_stats.size + ' characters')

} else {
    console.log(`file name ${filename} does not exist.`)
}



