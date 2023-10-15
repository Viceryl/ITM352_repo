
let product_quantities=[2,1,1,1,3];

// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]

products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

document.write("<table>");
//document.write("<tr><th>Product #</th><th>Quatity</th></tr>");
//Lab8 3.2
document.write("<tr><th>Product #</th><th>N ame</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");

for (let i=0; i< product_quantities.length; i++) {

    let quantity = product_quantities[i]
    let product = products[i]
    let extendedCost= quantity*product.price


    document.write("<tr>");
    document.write("<td>" +(i+1)+ "</td>");
    document.write("<td>"+ product.name + "</td>");
    document.write("<td>" +product.price.toFixed(2)+"</td>");
    document.write("<td>"+ quantity + "</td>")
    document.write("<td>"+ extendedCost.toFixed(2) + "</td>")
    document.write("</tr>");
}
document.write("</table>");




//create button after table 8.4.2
let deletebutton = document.createElement('button');
deletebutton.textContent= 'Delete Last Row';
deletebutton.addEventListener('click', deletelastrow);
document.body.appendChild(deletebutton);



//Lab8 4.1
function addNewRow() {
    let table=document.querySelector('table');
    let newrow = table.insertRow();
    newrow.innerHTML =`
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
    `
}

//add click listener, for add new row function
document.addEventListener('DOMContentLoaded', function(){
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});


//delete row fuction 8.4.2
function deletelastrow() {
    let table = document.querySelector('table');
    let rowcount = table.rows.length; //gives row count for table
    if (rowcount>1){
        table.deleteRow(rowcount-1);//delete last row (-1 because computer count for 0)
    }
}