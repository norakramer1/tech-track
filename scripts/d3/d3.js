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
  const xAxis = d3.axisBottom(x).ticks(10).tickFormat(d3.format("d"));

  // Add axis to SVG
  const xAxisG = svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

  // Add zoom functionality
  const zoom = d3
    .zoom()
    .scaleExtent([1, 80])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", function (event) {
      const newScale = event.transform.rescaleX(x);

      // Update the X axis dynamically
      xAxis.scale(newScale);
      xAxisG.call(xAxis);

      // Update positions of paintings and lines
      d3.selectAll("#painting").attr("x", (d) => newScale(d.objectEndDate));
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
    .attr("preserveAspectRatio", "xMidYMax meet")
    .attr("y", height - 340)
    .on("click", function (e, d) {
      const painting = d3.select(this);
      const centerX = width / 2 - 125; // Center position for the painting
      const imageY = height - 340; // Fixed baseline position

      // Remove existing panels
      d3.selectAll(".panel").remove();

      // Add the panel with a close button
      const panel = d3
        .select("body")
        .append("div")
        .attr("class", "panel")
        .style("position", "absolute")
        .style("top", `${imageY}px`) // Align with the painting
        .style("left", `${centerX + 270}px`) // Next to the painting
        .style("width", "500px")
        .style("height", "200px")
        .style("background", "#fff")
        .style("padding", "20px")
        .style("z-index", 1000)
        .style("opacity", 0)
        .html(
          `<button id="closePanel" style="position:absolute; top:5px; right:5px;">X</button>
           <h3>${d.title}</h3>
           <p><strong>Artist:</strong> ${d.artistDisplayName}</p>
           <p><strong>Year:</strong> ${d.objectEndDate}</p>
           <p><strong>About:</strong> ${d.artistDisplayBio}</p>
           <p><strong>Credit:</strong> ${d.creditLine}</p>`
        )
        .transition()
        .duration(300)
        .style("opacity", 1);

      // Move painting smoothly to the center
      painting
        .transition()
        .duration(300)
        .attr("x", centerX)
        .attr("y", imageY) // Ensure Y remains unchanged
        .attr("width", 250)
        .attr("height", 250);

      // Close panel functionality
      setTimeout(() => {
        d3.select("#closePanel").on("click", function () {
          d3.select(".panel")
            .transition()
            .duration(300)
            .style("opacity", 0)
            .remove();
        });
      }, 100);
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
    .attr("y1", 200)
    .attr("y2", 340)
    .attr("stroke", "#9499b0")
    .attr("stroke-width", 1)
    .attr("x1", (d) => x(d.objectEndDate) + 100)
    .attr("x2", (d) => x(d.objectEndDate) + 100);

  // Close panels when clicking on empty space
  svg.on("mousemove", function (event) {
    const target = event.target;
    if (target.tagName !== "image") {
      d3.selectAll(".panel").remove();
    }
  });

  // svg.on("mouseout", function () {
  //   d3.selectAll(".panel").remove();
  // });

  // Call zoom function
  d3.select("svg").call(zoom);
}
