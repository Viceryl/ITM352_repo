
//declare variable per lab 5.1 instructions//
let age=20;  // Not my real age
let fav_num=4;  //not my real fav number
let day_of_birth=10;
let month_of_birth=11; //not my real birthmonth

// define calc
let calc1 = age+fav_num/day_of_birth*month_of_birth;
let calc2 = (age+fav_num)/day_of_birth*month_of_birth;

//Output calc 1  & 2 to DOM
document.getElementById("result1").innerHTML = calc1;
document.getElementById("result2").innerHTML = calc2;

 