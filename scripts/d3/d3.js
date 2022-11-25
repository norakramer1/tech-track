import * as d3 from 'd3';
import {
  zoom,
  scaleLinear,
  scalePoint
} from 'd3';
import { renderData } from '../render';


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



// Read the data
export function renderD3(data) {



  
    // Add X axis
   var x = d3.scaleLinear()
    .domain([1300, 2020])
    .range([0, width]);
   
    // var xAxis =
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    // .call(d3.zoom().on("zoom", function () {
    //   g.attr("transform", d3.zoomTransform(this))
    // }))

        let x2 = x
    const xAxis = d3.axisBottom(x2);
const xAxisG = svg.select("g")
  .attr("transform","translate("+[0,height]+")")
  .call(xAxis);

    const zoom = d3.zoom()
  .on("zoom", function(event) {
    x2 = event.transform.rescaleX(x); 
    xAxisG.call(xAxis.scale(x2));
    // path.attr("d", line);
  })

   

  var y = d3.scalePoint()
  //  .domain(['European Paintings'])
    .domain(d3.map(data, (d) => d.department))
    .range([height, 0])
  //   var yAxis =
  svg.append("g")
    .call(d3.axisLeft(y));



// append the svg object to the body of the page
   svg.append("g")
    .selectAll('dot')
    .data(data)
    .enter()
    
    .append("image")
   
    .attr("xlink:href", function (d) {
      return d.primaryImageSmall
    })
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
    .text(`
    Additional information about the painting
    Artist: ${d.artistDisplayName}, title: ${d.title}`)
    .transition()
    .duration(175)
    .style("opacity", 1)
    )
    .on("mousemove", (e) =>
    d3
      .select("#tooltip")
      .style("left", e.pageX + 15 + "px")
      .style("top", e.pageY + 15 + "px")
  )



 



svg.call(zoom);
  
}



