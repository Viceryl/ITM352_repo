/*let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

*/
//

let product1={
name: "HTC",
price: 40.00,
image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg",
}

let product2={
    name: "Apple",
    price: 40.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg",
}

let product3={
    name: "nokia",
    price: 75.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg",
}

let product4={
    name: "samsung",
    price: 35.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg",
}

let product5={
    name: "blackberry",
    price: 10.00,
    image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg",
    }

let products=[product1,product2,product3,product4,product5]

/*

for ( let i=1; eval("typeof name"+i)!='undefined'; i++){
    document.querySelector('.main').innerHTML+=`
 <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this); ">
 <h2>${eval("name"+i)}</h2>
 <p>${eval("price"+i)}</p>
 <img src="${eval('image'+i)}"/>
</section>
`
}
*/

for ( let i=0; i<products.length; i++){
   let product=products[i]
    document.querySelector('.main').innerHTML+=`;
 <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this); ">
 <h2>${product.name}</h2>
 <p>${product.price}</p>
 <img src="${product.image}"/>
</section>
`
}





//declare and push to the DOM the store name at top and bottom
const store_name="Victor";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//Q1 as Function
function Winner(element) { if (spins<2*hits&&hits<spins){
    over_half=true;
 } else { over_half=false}
 win_span.innerHTML=over_half
}

//on mouse event
function changeClassName(element){
    if(element.className=="item"){
        spins=spins+1; 
        element.className = 'item rotate';
        
    }
    Winner(element)
  
    let hits_spins_ratio= hits/spins
    let progress;
    if ( hits_spins_ratio >= 0.5 &&hits < spins ) {
              progress = 'You win!';}
              else if ( hits_spins_ratio >= 0.25 ) { progress = 'Almost there!';} 
                else if ( hits_spins_ratio>0) {progress = 'On your way!';}
                else if (progress = 'Get going!')
        
        
        win_span.innerHTML=progress;
    
    

//Q1
   /* if (spins<2*hits&&hits<spins){
       //wins=true;
       over_half=true;
    } else { over_half=false
        //wins=false

    }*/
     //win_span.innerHTML=wins;
     //win_span.innerHTML=over_half
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

    hits_spins_ratio = hits / spins;
    if (hits_spins_ratio > 0) {
        progress = 'On your way!';
        
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
        }
        else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
        }
    } else {
        progress = 'Get going!';
    }
    win_span.innerHTML=progress;

}





//onclick events
function resetClassName(element) {
    if(element.className=="item rotate"){
        hits=hits+=2; 
        element.className = 'item';

    }else{
        changeClassName(element)
    }
    Winner(element);

    hits_span.innerHTML = hits;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2);
   

// -- Winning progress depends on hits/spins Q4


/*

let hits_spins_ratio= hits/spins
let progress;
if ( hits_spins_ratio >= 0.5 &&hits < spins ) {
          progress = 'You win!';}
          else if ( hits_spins_ratio >= 0.25 ) { progress = 'Almost there!';} 
            else if ( hits_spins_ratio>0) {progress = 'On your way!';}
            else if (progress = 'Get going!')
    
    
    win_span.innerHTML=progress;*/

    // -- Winning progress depends on hits/spins

//Chatgpt code
hits_spins_ratio = hits / spins;
if (hits_spins_ratio > 0) {
    progress = 'On your way!';
    
    if (hits_spins_ratio >= 0.5 && hits < spins) {
        progress = 'You win!';
    }
    else if (hits_spins_ratio >= 0.25) {
        progress = 'Almost there!';
    }
} else {
    progress = 'Get going!';
}
win_span.innerHTML=progress;

}
