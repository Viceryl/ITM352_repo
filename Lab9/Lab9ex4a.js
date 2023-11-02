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

let pieces = [cut(attributes)];
console.log(typeof(pieces));
console.log(pieces);

for (let i = 0; i < pieces.length; i++) { // Remove the semicolon and correct the loop condition.
    console.log(pieces[i]+" "+typeof(pieces[i]));
}

pieces.toString()

function isNonNegInt(q, returnErrors = false) {
    let errors = []; // assume no errors at first

    if (Number(q) !== q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) !== q) errors.push('Not an integer!'); // Check that it is an integer


}

for (let i = 0; i < pieces.length; i++) {
    let result = isNonNegInt(pieces[i], true);
    if (result.length > 0) {
        console.log(pieces[i] + ' has the following errors: ' + result.join(', '));
    }
}

// The original test checks for errors, and if errors are found, it logs them.
