//attributes = "<name>;<age>;<major>"
//node Lab9ex2.jsfunction cut(a) {

/*let separator = ";";
let resultArray = attributes.split(";", 2);
console.log(resultArray);
}
cut(attributes)
*/


let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";


function cut(a) {
    let resultArray = a.split(";");
    console.log(resultArray);
    return resultArray; // Add a return statement to return the resultArray.
}

let pieces = cut(attributes);
console.log(typeof(pieces))
console.log(pieces)

for (let i = 0; i < pieces.length; i++) { // Remove the semicolon and correct the loop condition.
    console.log(pieces[i]+" "+typeof(pieces[i]));
}

console.log(pieces.toString())