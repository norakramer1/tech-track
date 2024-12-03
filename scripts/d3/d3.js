import * as d3 from "d3";

// Set margins
const margin = {
  top: 10,
  right: 40,
  bottom: 50,
  left: 80,
};

// Set dimensions for graph
let clientWidth = window.innerWidth;
const width = clientWidth - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create svg
let svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height + margin.top + margin.bottom)

  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Append clip-path for graph edges
svg
  .append("defs")
  .append("clipPath")
  .attr("id", "clipPath")
  .append("rect")
  .attr("width", width)
  .attr("height", height);

// Read the data
export function renderD3(data) {
  // Add X axis
  var x = d3.scaleLinear().domain([1400, 2020]).range([0, width]);
  // Move axis to bottom of graph
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Zoom functionality
  let x2 = x;
  const xAxis = d3.axisBottom(x2);
  const xAxisG = svg.select("g").call(xAxis);

  const zoom = d3
    .zoom()
    .scaleExtent([0.5, 80]) // This control how much you can unzoom and zoom
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", function (event) {
      // on zoom rescale x axis and update x position of all paintings
      x2 = event.transform.rescaleX(x);
      xAxisG.call(d3.axisBottom(x2));

      d3.selectAll("#painting").attr("x", function (d) {
        return x2(d.objectEndDate);
      });
    });

  // enter images in graph
  svg
    .append("g")
    .attr("id", "paintings")
    .attr("clip-path", "url(#clipPath)")
    .selectAll("dot")
    .data(data)
    .enter()
    .append("image")
    .attr("id", "painting")
    .attr("xlink:href", function (d) {
      return d.primaryImageSmall;
    })
    .attr("x", function (d) {
      return x(d.objectEndDate);
    })

    .attr("width", 200)
    .attr("height", 200)

    .on("click", (e, d) =>
      d3
        .select(".panel")

        .attr("id", "open")
        //  render dynamic html in panel on click
        .html(
          `<li>
      <img src="${d.primaryImageSmall}">
       <div>
         <h2>${d.title}</h2>
         <h3> ${d.objectEndDate}</h3>
         <h3><span>Made by:</span> ${d.artistDisplayName}</h3>
         <h3><span>About the artist:</span> ${d.artistDisplayBio}</h3>
         <h3><span>Credit:</span> ${d.creditLine}</h3>
      </div>
    </li>`
        )

        .transition()
        .duration(175)
    )
    // remove ID with opacity settings on mouseout
    .on("mouseout", (e) => d3.select(".panel").attr("id", ""));

  // call zoom function
  d3.select("svg").call(zoom);
}
