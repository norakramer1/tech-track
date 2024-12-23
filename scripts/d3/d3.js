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
  const currentDate = new Date();
  const xDomain = [1400, currentDate.getFullYear()];

  // Add X axis with linear scale
  let x = d3.scaleLinear().domain(xDomain).range([0, width]);
  const xAxis = d3.axisBottom(x).ticks(10).tickFormat(d3.format("d")); // Year ticks with integer format

  // Add axis to SVG
  const xAxisG = svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

  // Add zoom functionality
  const zoom = d3
    .zoom()
    .scaleExtent([1, 80]) // Zoom range: 1x to 80x zoom
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", function (event) {
      const newScale = event.transform.rescaleX(x);

      // Update the X axis dynamically
      xAxis.scale(newScale);
      xAxisG.call(xAxis);

      // Update positions of paintings
      d3.selectAll("#painting").attr("x", (d) => newScale(d.objectEndDate));

      // Update positions of lines
      d3.selectAll(".painting-line")
        .attr("x1", (d) => newScale(d.objectEndDate) + 100)
        .attr("x2", (d) => newScale(d.objectEndDate) + 100);
    });

  // Add paintings to the graph
  svg
    .append("g")
    .attr("id", "paintings")
    .attr("clip-path", "url(#clipPath)")
    .selectAll("image")
    .data(data)
    .enter()
    .append("image")
    .attr("id", "painting")
    .attr("xlink:href", (d) => d.primaryImageSmall)
    .attr("x", (d) => x(d.objectEndDate))
    .attr("height", 200)
    .attr("width", 200)
    .attr("preserveAspectRatio", "xMidYMax meet") // Align to bottom-center
    .attr("y", height - 340) // Baseline at the bottom (adjust y dynamically)
    .on("mouseover", function (e, d) {
      const painting = d3.select(this);

      // Remove any existing panels
      d3.selectAll(".panel").remove();

      // Add the panel
      d3.select("body")
        .append("div")
        .attr("class", "panel")
        .style("position", "absolute")
        .style("bottom", "0")
        .style("left", `${x(d.objectEndDate) + 100}px`) // Align to the image's center
        .style("width", "500px")
        .style("height", "200px")
        .style("background", "#fff")
        .style("padding", "20px")
        .style("z-index", 1000)
        .html(
          `<h3>${d.title}</h3>
           <p><strong>Artist:</strong> ${d.artistDisplayName}</p>
           <p><strong>Year:</strong> ${d.objectEndDate}</p>
           <p><strong>About:</strong> ${d.artistDisplayBio}</p>
           <p><strong>Credit:</strong> ${d.creditLine}</p>`
        )
        .style("opacity", 1);

      // Highlight the painting by increasing its size
      painting
        .transition()
        .duration(300)
        .attr("width", 250)
        .attr("height", 250);
    })
    .on("mouseout", function () {
      const painting = d3.select(this);

      // Reset the painting size
      painting
        .transition()
        .duration(300)
        .attr("width", 200)
        .attr("height", 200);
    });

  // Add lines connecting paintings to the timeline
  svg
    .append("g")
    .attr("id", "lines")
    .selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("class", "painting-line")
    .attr("y1", 200) // Start at the bottom of the painting
    .attr("y2", 340) // End at the timeline
    .attr("stroke", "#9499b0")
    .attr("stroke-width", 1)
    .attr("x1", (d) => x(d.objectEndDate) + 100)
    .attr("x2", (d) => x(d.objectEndDate) + 100);

  // Close all panels when hovering over empty space
  svg.on("mousemove", function (event) {
    const target = event.target; // Correctly use `event.target` for modern D3.js

    // Check if the hovered element is not a painting
    if (target.tagName !== "image") {
      d3.selectAll(".panel").remove();
    }
  });

  svg.on("mouseout", function () {
    d3.selectAll(".panel").remove();
  });

  // Call zoom function
  d3.select("svg").call(zoom);
}
