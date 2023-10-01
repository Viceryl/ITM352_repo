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
