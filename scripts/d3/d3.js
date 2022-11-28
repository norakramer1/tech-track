import * as d3 from 'd3';
import {
  zoom,
  scaleLinear,
  scalePoint
} from 'd3';
import {
  renderData
} from '../render';


var margin = {
  top: 10,
  right: 10,
  bottom: 30,
  left: 100
}



let clientWidth = window.innerWidth;




const width = clientWidth - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;


var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

    svg.append("defs").append("clipPath")
    .attr("id", "clipPath")  // <-- we need to use the ID of clipPath
    .append("rect")
    .attr("width", width)
    .attr("height", height)
 

 
  svg.append("path")
  .attr("height", height)
    .attr("class", "line")
  


// Read the data
export function renderD3(data) {


  // Add X axis
  var x = d3.scaleLinear()
    .domain([1400, 2020])
    .range([0, width]);

  // var xAxis =
  svg.append("g")

    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
  // .call(d3.zoom().on("zoom", function () {
  //   g.attr("transform", d3.zoomTransform(this))
  // }))

  let x2 = x;
  const xAxis = d3.axisBottom(x2);
  const xAxisG = svg.select("g")
    // .attr("transform","translate("+[0,height]+")")
    .call(xAxis);

  const zoom = d3.zoom()
    .scaleExtent([.5, 20])
    // This control how much you can unzoom (x0.5) and zoom (x20)
    .extent([
      [0, 0],
      [width, height]
    ])
    .on("zoom", function (event) {

      x2 = event.transform.rescaleX(x);
      xAxisG.call(xAxis.scale(x2));
      let myTransform = event.transform;

      // myTransform.y = 0;

      // imageTransform = ;
      d3.selectAll('#painting')
      
        .attr("transform", "translate(" + myTransform.x + "," +0 + ") scale(" + 1 + ")");
      // .attr("transform", myTransform)
      //  .style("transform-origin", "top");

      // path.attr("d", line);
    })



  var y = d3.scalePoint()
    //  .domain(['European Paintings'])
    .domain(d3.map(data, (d) => d.department))
    .range([0, height])
 

  //   var yAxis =
  svg.append("g")
 
    .call(d3.axisLeft(y));



  // append the svg object to the body of the page
  svg.append("g")
    .attr("id", "paintings")
    .attr("clip-path","url(#clipPath)")
    .selectAll('dot')
    .data(data)
    .enter()
    .append("image")
    .attr("id", "painting")
    .attr("xlink:href", function (d) {
      return d.primaryImageSmall
    })
    .attr("x", function (d) {
      return x(d.objectEndDate);
    })

    .attr("y", function (d) {
      return y(d.department);
    })
  
    .attr("width", 150)
    .attr("height", 150)
    
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

  // .call(zoom);





  // svg.call(zoom);
  d3.select('svg').call(zoom);
}