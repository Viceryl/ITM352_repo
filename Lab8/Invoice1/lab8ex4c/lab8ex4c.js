
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



    let newrow = document.createElement('tr');
    newrow.innerHTML =`
    <td>${i+1}</td>
    <td>${product.name }</td>
    <td>${product.price.toFixed(2)}</td>
    <td>${quantity}</td>
    <td>${extendedCost.toFixed(2)}</td>
    </tr>
    `
document.querySelector('table').appendChild(newrow);

newrow.addEventListener('mouseover', function() {
    newrow.style.backgroundColor='yellow';
});

newrow.addEventListener('mouseout', function() {
    newrow.style.backgroundColor=''
});

newrow.addEventListener('click', function() {
    document.querySelector('table').deleteRow(newrow.rowIndex);
});
}



//create button after table 8.4.3 Add row button
let addbutton = document.createElement('button');
addbutton.textContent= 'Add New Row';
addbutton.addEventListener('click', addNewRow);
document.body.appendChild(addbutton);



//Lab8 4.3 Add new row with events 
function addNewRow() {
    let table=document.querySelector('table');
    let newrow = table.insertRow();
    newrow.innerHTML =`
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
    `;
    //onmouse over yellow
    newrow.addEventListener('mouseover', function() {
        newrow.style.backgroundColor='yellow';
    });
    
    //nonmouse over clear
    newrow.addEventListener('mouseout', function() {
        newrow.style.backgroundColor=''
    });
    //Deleterow when clicked
    newrow.addEventListener('click', function() {
        table.deleteRow(newrow.rowIndex);
    })
}

//add click listener, for add new row function
//document.addEventListener('DOMContentLoaded', function(){
 //   let table = document.querySelector('table');
   // table.addEventListener('click', addNewRow);
//});


//delete clicked row fuction 8.4.3
function deleterow() {
    let table = document.querySelector('table');
    let rowcount = table.rows.length; //gives row count for table
    if (rowcount>1){
        table.deleteRow(rowcount-1);//delete last row (-1 because computer count for 0)
    }
}

