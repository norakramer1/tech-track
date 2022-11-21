import * as d3 from 'd3';
import * as fetchPaintings from "./getData.js";
import getData from "./getData.js"






// export function renderD3(graph) {
// let dataSet = graph;

// const pointScale = d3
//   .scalePoint()
//   .domain(d3.map(dataSet, (d) => d.department))
//   .range([0, 1200]);

//   // Een lineare schaal die de oppervlakte van de circel bepaalt
// const sqrtScale = d3
// .scaleSqrt()
// .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
// .range([0, 30]);

// // Kleuren schaal lineair van rood naar donkerrood
// const colorScaleLinear = d3
// .scaleLinear()
// .domain([0, d3.max(dataSet, (d) => d.artistBeginDate)])
// .range(["red", "darkred"]);

// // Teken circels met de lineaire kleur schaal (kleurverloop)
// d3.select("#scale1")
// .selectAll("circle")
// .data(dataSet)
// .join("circle")
// .attr("r", (d) => sqrtScale(d.artistBeginDate))
// .attr("cx", (d) => pointScale(d.departent))
// .attr("fill", (d) => colorScaleLinear(d.artistBeginDate))
// //Als je muis over een <circle> beweegt of tapt op een touchscreen, maken we de
// //tooltip <div> zichtbaar en vullen deze met onze data
// //D3 geeft je twee parameters mee voor events, die we
// //hier e en d hebben genoemd. E bevat alle gegevens
// //die je in elk javascript event krijgt, d bevat de data
// //die gekoppeld is aan dit element
// //D3 koppelt bij d3.join() namelijk de oorpsronkelijke data aan het DOM element
// //Type maar eens document.querySelector("circle").__data__ in je console en je ziet het data object van de eerste circel in het diagram
// .on("mouseover touchstart", (e, d) =>
//   d3
//     .select("#tooltip")
//     .transition()
//     .duration(175)
//     .style("opacity", 1)
//     .text(`${d.day}: ${d.cars} cars`)
// )
// //Als je muis beweegt over de <circle> passen we de positie
// //van de tooltip <div> aan. We tellen er 15 pixels bij op,
// //want we willen de tooltip naast je cursor en niet er onder
// .on("mousemove", (e) =>
//   d3
//     .select("#tooltip")
//     .style("left", e.pageX + 15 + "px")
//     .style("top", e.pageY + 15 + "px")
// )
// //Als de muis weer buiten de <circle> beweegt, dan verbergen
// //we de tooltip <div> weer
// .on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
// );

// //Als je ergens buiten de grafiek tapt op een touchscreen
// //verbergen we ook de tooltip
// d3.select("body").on("touchend", e => d3.select("#tooltip").style("opacity", 0));

// //Voeg een as toe met de dagen van de week (afgekort)

// const axisBottom = d3.axisBottom(pointScale);

// d3.select("#axis1").call(axisBottom);

// }


// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1100 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")

          
          

//Read the data
 export function renderD3 (data) {
  // Add X axis
  var x = d3.scalePoint()
     .domain(d3.map(data, (d) => d.department))
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 2020])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  
    
  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.department); } )
      .attr("cy", function (d) { return y(d.objectEndDate); } )
      .attr("r", 7)
      .attr('opacity', '0.6')
      .style("fill", "#4125DA")
      .join("dot")
   .on("mouseover touchstart", (e, d) =>
  d3
    .select("#tooltip")
    .transition()
    .duration(175)
    .style("opacity", 1)
    .text(`${d.department}`)
)
      
      // .on("mousemove", mousemove(data) )
      // .on("mouseleave", mouseleave(data) )
      
}


// var mousemove = function(d) {
//   tooltip
//     .text(`This belongs in: ${d.department}`)
//     .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
//     .style("top", (d3.mouse(this)[1]) + "px")
// }