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

  // Zoom functionality
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
    .each(function () {
      // Set initial width to prevent layout shift
      d3.select(this).attr("width", 200);
    })
    .on("click", (e, d) =>
      d3
        .select(".panel")
        .attr("id", "open")
        .html(
          `<li>
          <img src="${d.primaryImageSmall}">
          <div>
            <h2>${d.title}</h2>
            <h3>${d.objectEndDate}</h3>
            <h3><span>Made by:</span> ${d.artistDisplayName}</h3>
            <h3><span>About the artist:</span> ${d.artistDisplayBio}</h3>
            <h3><span>Credit:</span> ${d.creditLine}</h3>
          </div>
        </li>`
        )
        .transition()
        .duration(175)
    )
    .on("mouseout", (e) => d3.select(".panel").attr("id", ""));

  // Add lines connecting paintings to the timeline
  svg
    .append("g")
    .attr("id", "lines")
    .selectAll("line")
    .data(data)
    .enter()
    .append("line")
    .attr("class", "painting-line")
    .attr("y1", height - 140) // Start at the bottom of the painting
    .attr("y2", height - 140) // End at the timeline
    .attr("stroke", "#9499b0")
    .attr("stroke-width", 1)
    .attr("x1", function (d, i) {
      const painting = d3.selectAll("#painting").nodes()[i]; // Select corresponding painting
      const paintingWidth = painting.getBBox().width; // Get width dynamically
      const paintingX = x(d.objectEndDate); // Position of the painting
      return paintingX + paintingWidth / 2; // Center of painting
    })
    .attr("x2", function (d, i) {
      const painting = d3.selectAll("#painting").nodes()[i];
      const paintingWidth = painting.getBBox().width;
      const paintingX = x(d.objectEndDate);
      return paintingX + paintingWidth / 2;
    })
    .attr("y2", function (d, i) {
      const painting = d3.selectAll("#painting").nodes()[i];
      const paintingHeight = painting.getBBox().height;
      console.log(paintingHeight);
      const paintingY = x(d.objectEndDate);
      return paintingY + paintingHeight;
    });

  // Call zoom function
  d3.select("svg").call(zoom);
}
