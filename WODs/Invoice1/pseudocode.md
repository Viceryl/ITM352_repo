1. Create directorynamed invoice1


Craete table
- Declare all variables
- Q*P = Ext P
- Sub T = All price sum
- Set tax variable


Create a directory Invoice1 and add a file invoice.html.

At the top of this file put a Javascript comment briefly describing what this file is. Use the /* ... */ to make a multi line comment.

Under the comment form above, add a single line comment // Product Data then underneath define variables for just one product:
     // Product 1
     var item1 = 'Gillette Sensor 3 Razor';
     var quantity1 = 2;
     var price1 = 1.23;
Copy this and paste it 4 times. Change the variable names item2, item3, ... and corresponding values.

Add variables extended_price1, extended_price2, ... and corresponding expressions to compute the extended price for each product. Comment this section // Compute extended prices

Add the products’ extended prices together to get an overall subtotal for the sale. Comment this section.

Calculate sales tax using 5.75% as your tax rate and display the tax amount. Comment this section.

Add together the subtotal and the tax amount to get a grand total. We won’t worry about shipping or other costs for now.

Add HTML to display the basic table. Create a template for one product row. to display the item, quantity, price, extended price.

You have two choices in generating the product rows:
Option 1: Put the row template into a document.write() then string templates to fill in the product data in the row cells. Copy and paste this 4 times and change the variables as needed for each product line.

Option 2: Add an id="invoiceTable" to the table. Remove the product row template. In its place use

    // item row 1
   var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item1; 
   row.insertCell().innerHTML = quantity1;
   row.insertCell().innerHTML = price1.toFixed(2);
   row.insertCell().innerHTML = extended_price1;
Copy and paste this 4 times and adjust the variable names.

In the Sub-total row, use document.write() inside the cell for the sub-total or set this cell id="subtotal_cell" and then set .innerHTML to the subtotal value. Don’t forget to add a $ sign.

In the tax row, do the same as above. Use .toFixed(2) to format the tax to 2 decimals.

In the Total row, do the same as above and use .toFixed(2) to format the grand total to 2 decimals. Display your grand total in bold print.

HINT:
Do not try to create the HTML table first. Start by simply printing each row in the table as an individual line. When you have everything calculating and printing correctly, add in the table tags.  (You could even try viewing the HTML for *this* page and copy the HTML table in the example above and then use it to change what you print in your print statement.)

HINT:
Use string templates to `document.write()` entire rows of the table rather than mixing in many little `document.write()` scripts
HINT:
Check the output as you work rather than waiting until the end. It will be faster and easier to fix problems as they occur!

Quality Checklist:

Is your code commented?	 
Minimum five products?	 
Prices not hard coded?	 
Subtotal is calculated correctly?	 
Sales tax is calculated correctly?	 
Total is calculated correctly?	 
Amounts only have 2 decimal places?	 
HTML table display?	 
 

Submit the link to your POKE and the link to your Github pages

------

Modification for Sal's class:

Create a directory named Invoice1.

In the Invoice1 directory, create two files: invoice.html and invoice.js.

In the invoice.html file, you can include the HTML structure for the invoice table. Here's a simplified example of the HTML structure for the invoice table:
<!-- invoice.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales Receipt</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Extended Price</th>
            </tr>
        </thead>
        <tbody id="invoiceTable">
            <!-- Product rows will be added dynamically using JavaScript -->
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Sub-total</td>
                <td id="subtotal_cell">$0.00</td>
            </tr>
            <tr>
                <td colspan="3">Tax @ 5.75%</td>
                <td id="tax_cell">$0.00</td>
            </tr>
            <tr>
                <td colspan="3"><strong>Total</strong></td>
                <td id="total_cell"><strong>$0.00</strong></td>
            </tr>
        </tfoot>
    </table>
    <script src="invoice.js"></script>
</body>
</html>

In the invoice.js file, you can add the JavaScript code to calculate and display the invoice data dynamically.