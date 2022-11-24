import * as d3 from 'd3';


import {
  zoom,
  scaleLinear,
  scalePoint
} from 'd3';
import { renderData } from '../render';

// var x;
// var xAxis;
// var y;
// var yAxis;
// set the dimensions and margins of the graph
var margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 50
  },
  width = 1100 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;


var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")")



  


//Add Y axis




// Read the data
export function renderD3(data) {

    // Add X axis
   var x = d3.scaleLinear()
    .domain([1300, 2020])
    .range([0, width]);
    // var xAxis =
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  var y = d3.scalePoint()
  //  .domain(['European Paintings'])
    .domain(d3.map(data, (d) => d.department))
    .range([height, 0])
  //   var yAxis =
  svg.append("g")
    .call(d3.axisLeft(y));

  
    svg.append("g")
    // .call(d3.axisLeft(y));
  
    // Add a clipPath: everything out of this area won't be drawn.
    var clip = svg.append("defs").append("svg:clipPath")
    .attr("id", "clip")
    .append("svg:rect")
    .attr("width", width )
    .attr("height", height )
    .attr("x", 0)
    .attr("y", 0);

      // Set the zoom and Pan features: how much you can zoom, on which part, and what to do when there is a zoom
  // var zoom = d3.zoom()
  // .scaleExtent([.5, 20])  // This control how much you can unzoom (x0.5) and zoom (x20)
  // .extent([[0, 0], [width, height]])
  //  .on("zoom", updateChart);





// append the svg object to the body of the page
  // Add dots
  // var scatter =
   svg.append("g")
  // .attr("clip-path", "url(#clip)")
    .selectAll('dot')
    .data(data)
    .enter()
    .append("image")
   
    .attr("xlink:href", function (d) {
      return d.primaryImageSmall
    })
    // .attr("y", function (d) {
    //   return y(d.department);
    // })
    .attr("x", function (d) {
      return x(d.objectEndDate);
    })

    .style("fill", "#68b2a1")
    .attr("width", 100)
    .attr("height", 100)
   // .join("dot")
    .on("click", (e, d) =>
    d3
    .select(".panel")
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

  .on("mouseout", e => d3.select(".panel").style("opacity", 0)
  )


    // .on("mousemove", (e) =>
    //   d3
    //   .select("#tooltip")
    //   .style("left", e.pageX + 15 + "px")
    //   .style("top", e.pageY + 15 + "px"),
    


    //   // .on("click", () =>
    //   // d3
    //   // //  <img src="${d.primaryImageSmall}">
    //   // .select(".panel")
    //   // .transition()
    //   // .duration(175)
    //   // .style("opacity", 0)

    // )

    

    // .on("click", e => d3.select("#panel").style("opacity", 0))


  // A function that updates the chart when the user zoom and thus new boundaries are available
// This add an invisible rect on top of the chart area. This rect can recover pointer events: necessary to understand when the user zoom
// svg.append("rect")
//   .attr("width", width)
//   .attr("height", height)
//   .style("fill", "none")
//   .style("pointer-events", "all")
//   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//   .call(zoom);
// now the user can zoom and it will trigger the function called updateChart





 
  
}


// function updateChart() {

//   console.log(x)
//      // recover the new scale
//      let newX = d3.event.transform.rescaleX(x);
//       let newY = d3.event.transform.rescaleY(y);
   
//      // update axes with these new boundaries
//      xAxis.call(d3.axisBottom(newX))
//      yAxis.call(d3.axisLeft(newY))
 
//      // update circle position
//      scatter
//        .selectAll("image")
//        .attr('x', function(d) {return newX(d.objectEndDate)})
//        .attr('y', function(d) {return newY(d.department)})
// }




