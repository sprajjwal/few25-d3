/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/*
Example One: This example will place an svg circle in the center of the svg elelment,
Will give it a a radius of 100 pixels and fill it with a red colour
*/
// eslint-disable-next-line no-undef
d3.select('svg#example1')
  .append('circle')
  .attr('cx', 320)
  .attr('cy', 240)
  .attr('r', 100)
  .attr('fill', 'red');

/*
    Use D3 to create shapes in svg#example1 using the following attributes/dimensions:
  TODO 1: Circle
        set the opacity of the circle to 0.5
*/
d3.select('svg#example1')
  .append('circle')
  .attr('cx', 150)
  .attr('cy', 150)
  .attr('r', 100)
  .attr('fill', 'red');

/* TODO 2: Draw an SVG Lollipop chart with the following attributes:
        line: x1 = 100, y1=100, x2=300, y2=100 stroke=black
        circle: cx=300, cy=100, r=3
        text: x=100, y=90, content="Lolliport Chart"
*/
/*
TODO 3: Draw an SVG Line with the following attributes:
         lineOne: x1=100, y1=100 x2=200, y2= 200, stroke=rgb(255, 0, 0), stroke-width=4
*/

/*
TODO 4: Draw an SVG Rectangle witht he following attributes:
         rectOne: x=20, y=20 width=200, height=100, fill=green
   */

/* Example Two: Simple Bar Chart showing ticket slaes for each conference in sales.json
    The bars are rect svg elements and have attributes x,y, height, width and fill color.
 */

// Define the bar height and its spacing and text offset
const BAR_HEIGHT = 50;
const BAR_SPACING = 85;
const TEXT_OFFSET = 18;

d3.json('../data/sales.json')
  .then((data) => {
    d3.select('svg#example2')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('height', BAR_HEIGHT)
      .attr('y', (val, idx) => idx * BAR_SPACING)
      .attr('width', (val, idx) => val.tickets_sold)
      .attr('fill', 'green');

    // Code to add the text part of the data visual - conference name and tickets sold:
    d3.select('svg#example2')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', 0)
      .attr('y', (val, idx) => idx * BAR_SPACING + BAR_HEIGHT + TEXT_OFFSET)
      .attr('color', 'black')
      .attr('font-size', '18px')
      .text((val, idx) => `${val.conference_name} - ${val.tickets_sold}`);

    // Code to show difference between tickets sold and tickets available
    d3.select('svg#example2')
      .selectAll('rect#diffs')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (val, idx) => val.tickets_sold)
      .attr('y', (val, idx) => idx * BAR_SPACING)
      .attr('height', BAR_HEIGHT)
      .attr('width', (val, idx) => Math.abs(val.tickets_sold - val.tickets_available))
      .attr('fill', 'red');
  });

/*
  TOD0 5:
  Display a simple Bar Graph showing the viewership numbers for each film in viewership.csv
   */
d3.csv('../data/viewership.csv')
  .then();
