Start with the output of your Lab 6. If you did not complete your Lab 6, DM the instructor or TA on Discord for a link to a functional website for you to copy the html/js/css files (just make sure you fix the names to be yours, have appropriate image files or links, etc.). Copy your SmartPhoneProducts1_4 folder into a new POKE8 folder and rename that directory SmartPhoneProducts2. 


Add the following variables to the .js file to serve as the product data. Do I need to say we don't use var anymore? Use let.  Also, you can use the links to the images as shown or do as I do and have the images in a folder under SmartPhoneProducts1_5.

Make a copy of the last <section> and paste it underneath where the rest of the sections are. Then use a string template in your .js to output the same info as the original last section. Reload the page and verify you get a duplicate section (you should see 6 sections now).

Now use templates (${}) to replace the innerHTML of <h2> with the variable name1, and the same for <p2> using the variable price1, and the src for the <img> use the variable image1. Test that the page still appears as expected. Now above the document.write() add a variable i and initialize it to 1. Use eval() in the templates to generate the variable names using i e.g. eval("name" + i). Check that the page displays as expected. Now change i to 2 and check that the first section is now the same as the second section. Delete the original 5 <sections> (the ones not in the string template). Check that section 2 is the only one displayed.

Now use a for-loop in place of the variable initialization to loop on the document.write() and change i from 1 until eval("typeof name"+i) != 'undefined'. Check that the page now displays as it originally did.

1. in html cut out all sections of main
2. use document.queryselector('.main').innerHTML+=` `; to target the specific main html element 
3. replicate <section..>


1. copy lab6 folder into poke 8 folder
rename files
2. copy product data into js file
3. 
for ( let i=1; eval("typeof name"+i)!='undefined'; i++){
    document.querySelector('.main').innerHTML+=`
//retain mouse event section
 <section class="item" onmouseover="changeClassName(this);" onclick="resetClassName(this); ">
 //Use eval to create heading and price for each in loop//
    <h2>${eval("name"+i)}</h2>
    <p>${eval("price"+i)}</p>
    <img src="${eval('image'+i)}"/>
</section>

    `
}

