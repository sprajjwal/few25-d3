/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */

/* Example 1: Drawing a Line Graph using D3 Linera Scale
    */
const lineHeight = 350;
const lineWidth = 400;
const padding = 25;

d3.json('../data/monthlySales.json')
  .then((data) => {
    // define x linear Scale
    const xScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => d.month),
        d3.max(data, (d) => d.month),
      ])
      .range([0, lineWidth])
      .nice();

    // define y Linear Scale
    const yScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => d.sales),
        d3.max(data, (d) => d.sales),
      ])
      .range([lineHeight, 10])
      .nice();

    // Create function to draws the line
    const lineFunction = d3.line()
      .x((val) => xScale(val.month))
      .y((val) => yScale(val.sales))
      .curve(d3.curveLinear);

    // draw the line
    d3.select('svg#example1')
      .selectAll('path')
      .data(data)
      .enter()
      .append('path')
      .attr('d', lineFunction(data))
      .attr('stroke', 'purple')
      .attr('stroke-width', 2)
      .attr('fill', 'none');

    // add labels
    d3.select('svg#example1')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((val) => val.sales)
      .attr('x', (val) => xScale(val.month))
      .attr('y', (val) => yScale(val.sales))
      .attr('font-sizwe', '12px')
      .attr('fill', '#666666')
      .attr('text-ancchor', 'start')
      .attr('dy', '.35em');
  });

/*
  TODO 1: Draw a Line Graph Using D3.ScaleLinear
  Load Data from '..data/viewership.json'
  x axis = Episode Number
  y axis = US Viewrship
*/

/*
  Example 2: Adding Axis to the Chart with D3.js
 */

d3.json('../data/monthlySales.json')
  .then((data) => {
    // define x linear Scale
    const xScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => d.month),
        d3.max(data, (d) => d.month),
      ])
      .range([padding, (lineWidth - padding)])
      .nice();

    // define y Linear Scale
    const yScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => d.sales),
        d3.max(data, (d) => d.sales),
      ])
      .range([(lineHeight - padding), 10])
      .nice();

    // Define x and Y axis
    const xAxisGen = d3.axisBottom(xScale);
    const yAxisGen = d3.axisLeft(yScale).ticks(4);

    // Create function to draws the line
    const lineFunction = d3.line()
      .x((val) => xScale(val.month))
      .y((val) => yScale(val.sales))
      .curve(d3.curveLinear);

    // draw the line
    const svg = d3.select('svg#example2');

    // create y Axis
    svg.append('g').call(yAxisGen)
      .attr('class', 'axis')
      .attr('transform', `translate(${padding},0)`);

    // create x Axis
    svg.append('g').call(xAxisGen)
      .attr('class', 'axis')
      .attr('transform', `translate(0,${lineHeight - padding})`);

    svg.append('path')
      .attr('d', lineFunction(data))
      .attr('stroke', 'purple')
      .attr('stroke-width', 2)
      .attr('fill', 'none');
    // add labels
    d3.select('svg#example2')
      .selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text((val) => val.sales)
      .attr('x', (val) => xScale(val.month))
      .attr('y', (val) => yScale(val.sales))
      .attr('font-sizwe', '12px')
      .attr('fill', '#666666')
      .attr('text-ancchor', 'start')
      .attr('dy', '.35em');
  });

/*
  TODO 2: Draw a Line Graph with Axis Using D3.
  Load Data from '..data/viewership.json'
  x axis = Episode Number
  y axis = US Viewrship
  Use example above to guide
*/
d3.json('../data/viewership.json');

/* Example 3: Drawing a bar Chart Using Ordinal Scale
  We create a color scale using scaleOrdinal
  the Scale maps the years in '..data/eventDates.json' to colors.
 */

d3.json('../data/eventDates.json')
  .then((data) => {
    const svg = d3.select('svg#example3');

    const parseTime = d3.timeParse('%B %d, %Y');

    const dates = [];
    for (const obj of data) {
      dates.push(parseTime(obj.date));
    }

    let domain = d3.extent(dates);
    domain = [d3.timeYear.floor(dates[0]), d3.timeYear.ceil(domain[1])];

    const xScale = d3.scaleTime()
      .domain(domain)
      .range([25, 555]);

    const xAxis = d3.axisBottom(xScale)
      .ticks(d3.timeYear);

    svg.append('g')
      .attr('transform', 'translate(0,70)')
      .call(xAxis);

    const years = d3.map(dates, (d) => d.getFullYear()).keys();

    const colorScale = d3.scaleOrdinal()
      .domain(years)
      .range(['#000000', '#A4A4A4', '#1DA1F2', '#810081']);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(parseTime(d.date)))
      .attr('y', 40)
      .attr('width', 10)
      .attr('height', 30)
      .attr('fill', (d) => colorScale(parseTime(d.date).getFullYear()));
  });

/*
  TO DO 3:
  Create a bar grapgh with the data in '..distanceCovered.json'
  x axis = date
  y axis = distance covered

  HINT: Use ScaleLinear to scale values on y axis
    Use ScaleOrdinal to scale values on the x axis
*/
d3.json('../data/distanceCovered.json')
  .then(() => {

  });

/* TO DO 4: Stretch Challenge
  Create a Bar Chart using data in '..data/viewrship.josn'
  x axis = Episode Number
  y axis = US Viewership
*/

d3.json('../data/viewership.json');

/* TODO 5: Stretch Challenge
  Draw a Scatter Plot from the city population data in '..data/cities.csv'
  x axis = city label
  y axis = population
  Make sure to use the d3.scaleLinear function to scale the population numbers
*/

d3.csv('../data/cities.csv');
