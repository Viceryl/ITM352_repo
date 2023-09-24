//declare and push to the DOM the store name at top and bottom
const store_name="Sal";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
  
    element.className = 'item rotate';
    spins=spins+1; 
    if (spins<2*hits){
       //wins=true;
       over_half=true;
    } else {//wins=false
    }

    //win_span.innerHTML=wins;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}

// -- Winning progress depends on hits/spins
let hits_spins_ratio = hits/spins;
let progress
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        let progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}
function resetClassName(element) {
    element.className = 'item';
    hits=hits+=2;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}
