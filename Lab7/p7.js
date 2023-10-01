name1 = "HTC";
price1 = 40.00;
image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

name2 = "Apple";
price2 = 75.00;
image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

name3 = "Nokia";
price3 = 35.00;
image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

name4 = "Samsung";
price4 = 45.00;
image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

name5 = "Blackberry";
price5 = 10.00;
image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

console.log("Product variables loaded...");

//exersize1.1
console.log("exercise 1.1");
let num_pro=5;
let proCount=1;
while (proCount <=num_pro){
    console.log(proCount);
    proCount++;

}

//exersize1.2
console.log();
console.log("exercise 1.2");
proCount=1;
while (proCount <=num_pro){
    console.log(proCount+'. '+eval('name'+proCount));
    proCount++;
}

//1.3

console.log();
console.log("exercise 1.3");
proCount=1
while (proCount <=num_pro/2){
    console.log(proCount+'. '+eval('name'+proCount));
    proCount++;
}

//2.1
console.log();
console.log("exercise 2.1");
proCount=1;
while (proCount <=num_pro){ 
    if(proCount > num_pro/2 ){
        console.log("Thats's enough");
        break;
    }
    console.log(proCount);
    proCount++;
}

//2.2
console.log();
console.log("exercise 2.2");
proCount=1;
let lowerbound=num_pro*.25;
let upperbound=num_pro*.75;
while (proCount <=num_pro){ 
    if(proCount >= lowerbound && proCount<=upperbound ){
        console.log (eval('name'+proCount)+ ' is sold out!!');
     
    } else{
    console.log(proCount+'. '+eval('name'+proCount));
}
    proCount++;
}

//2.3
console.log();
console.log("exercise 2.3");
proCount=1;
while (proCount <=num_pro){ 
    if (proCount<=num_pro/2){
        console.log("Don't ask for anything else");
        //process.exit
    }
    if(proCount >= lowerbound && proCount<=upperbound ){
        console.log (eval('name'+proCount)+ ' is sold out!!');
     
    } else{
    console.log(proCount+'. '+eval('name'+proCount));
}
    proCount++;
}

//3.1a
console.log();
console.log("exercise 3.1");
proCount=1;
for (let i=1; i<=num_pro; i++)
while (i <=num_pro){ 
    if(i >= lowerbound && i<=upperbound ){
        console.log (eval('name'+i)+ ' is sold out!!');
     
    } else{
    console.log(i+'. '+eval('name'+i));
}
i++;
}

//3.1b
console.log();
console.log("exercise 3.1b");
proCount=1;
for (let i=1; eval("typeof name"+i)!='undefined'; i++)
while (i <=num_pro){ 
    if(i >= lowerbound && i<=upperbound ){
        console.log (eval('name'+i)+ ' is sold out!!');
     
    } else{
    console.log(i+'. '+eval('name'+i));
}
i++;
}