import * as d3 from 'd3';
import { scaleLinear, scalePoint } from 'd3';
import * as fetchPaintings from "./getData.js";
import getData from "./getData.js"



// set the dimensions and margins of the graph
var margin = {
    top: 10,
    right: 30,
    bottom: 30,
    left: 60
  },
  width = 1100 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")")




//Read the data
export function renderD3(data) {
  // Add X axis
  var x = d3.scalePoint()
    .domain(d3.map(data, (d) => d.department))
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([1100, 2020])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));



  // Add dots
  svg.append('g')
    .selectAll('dot')
    .data(data)
    .enter()
    .append("image")
    .attr("xlink:href", function (d) {
      return d.primaryImageSmall
    })
    .attr("x", function (d) {
      return x(d.department);
    })
    .attr("y", function (d) {
      return y(d.objectEndDate);
    })
    .attr("width", 100)
    .attr("height", 100)

    // .join("dot")
    .on("mouseover touchstart", (e, d) =>
      d3
      .select("#tooltip")
      .text(`Artist: ${d.artistDisplayName}, title: ${d.title}`)
      .transition()
      .duration(175)
      .style("opacity", 1)
      // .attr("r", (d) => scalePoint(d.department))
      // .attr("cx", (d) => scaleLinear(d.artistEndDate))
    
      )
      .on("mousemove", (e) =>
      d3
        .select("#tooltip")
        .style("left", e.pageX + 15 + "px")
        .style("top", e.pageY + 15 + "px")
    )

    .on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
    )

 

}


// .append("circle")
// .attr("cx", function (d) { return x(d.department); } )
// .attr("cy", function (d) { return y(d.objectEndDate); } )
// .attr("r", 7)
// .join("dot")

// svg.append('g')
// .selectAll("dot")
// .data(data)
// .enter()

// .append("circle")
//   .attr("cx", function (d) { return x(d.department); } )
//   .attr("cy", function (d) { return y(d.objectEndDate); } )
//   .attr("r", 7)
//   .attr('opacity', '0.6')
//   .style("fill", "#4125DA")
//   .join("dot")
// .on("mouseover touchstart", (e, d) =>
// d3
// .select("#tooltip")
// .text(`Artist: ${d.artistDisplayName}, title: ${d.title}`)
// .transition()
// .duration(175)
// .style("opacity", 1)

// .style("left", e.pageX + 15 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
// .style("top", e.pageY + 15 + "px")
// )