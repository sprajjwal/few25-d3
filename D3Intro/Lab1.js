/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* Example One: using d3 to style elements in the DOM
 */
d3.select('div#example1')
  .style('color', 'green');

/*  TODO 1: Rainbow Colors
    Use the D3 to change the background color of the firstDiv to vividred(#FF0018)
    Use the D3 to change the background color of the secondDiv to Deep Saffron(#FFA52C)
    Use the D3 to change the background color of the thirdDiv to Maximum Yellow(#FFFF41)
    Use the D3 to change the background color of the fourthDiv to Green (#008018)
    Use the D3 to change the background color of the fifthDiv to Blue (#0000F9)
    Use the D3 to change the background color of the lastDiv to Philippine Violet(#86007D)
 */

// d3.select('');

/* Example Two: using d3 to load JSON data: This example loads data from the file sales.json
    It returns and displays the conference name as a list to the DOM
 */
const generateDiv = (text) => {
  const el = document.getElementById('loadSection');
  const div = document.createElement('div');
  const txt = document.createTextNode(text);
  el.appendChild(div);
  div.appendChild(txt);
  return el;
};

d3.json('../data/sales.json').then((data) => {
  data.forEach((el, idx) => {
    document.body.appendChild(generateDiv(el.conference_name));
  });
});

/*
    TODO 2:
    load the data from viewership.csv into the DOM listing its Film title in a list
    Use the example above to guide
 */

d3.csv('../data/viewership.csv');

/* Stretch Challenge:
Display it's title and first air date to the the list above in a table section
*/

d3.csv('../data/viewership.csv');
