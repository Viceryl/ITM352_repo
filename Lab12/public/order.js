//order.js (LAB12,6)

///Check URl for error parameters and diplay/use them
let params=(new URL(document.location)).searchParams;
let q =Number(params.get('quantity'));
let error=params.get('error');
//if there is an error alert the user
if (error) {
    alert(error);
}

//seelect the div where product detils should be displayed
let productDetailsDiv = document.getElementById('productDetails'); 
//Display th first product's detils
productDetailsDiv.innerHTML = `<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`;

//select dic where the product list is deployed
let productlistDiv=document.getElementById('productlist')
//iterate throu the products and display thier sold count
for (let i in products){
    productlistDiv.innerHTML +=`<h4>${products[i]["total_sold"]}  ${products[i]["brand"]}`
}