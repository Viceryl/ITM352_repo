1. Starting from POKE6
Add line in receipt for shipping
<tr></tr>

2. Label Shipping row
<td colspan=3 >Shipping Cost"<td>

3. Determine tiered shipping cost
let shipping
if subt <50, shipping = 2.00
if  50=<subt<=100, shipping = 5.00
if subt >100, shipping = subt*0.05

4. Display values on table
<td id="shipping_cell">$0.00<td> 
document.getElementById(shipping_cell).innerhtml

5. Recalculate Grand total
total=tax+subtotal+shipping