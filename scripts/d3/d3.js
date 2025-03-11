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

  // Add lines connecting paintings to the timeline
  svg
    .append("g")
    .attr("id", "lines")
    .attr("clip-path", "url(#clipPath)") // Apply clipping
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
      xAxis.scale(newScale);
      xAxisG.call(xAxis);
      d3.selectAll("#painting").attr("x", (d) => newScale(d.objectEndDate));
      d3.selectAll(".painting-line")
        .attr("x1", (d) => newScale(d.objectEndDate) + 100)
        .attr("x2", (d) => newScale(d.objectEndDate) + 100);
    });

  let selectedPainting = null;

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
    .style("border-radius", "10px") // Rounded corners
    .on("click", function (e, d) {
      const clickedPainting = d3.select(this);

      // If clicking the already selected painting, reset it
      if (
        selectedPainting &&
        selectedPainting.node() === clickedPainting.node()
      ) {
        selectedPainting
          .transition()
          .duration(800)
          .attr("x", x(d.objectEndDate)) // Reset X position
          .attr("width", 200)
          .attr("height", 200);

        d3.select("#paintings").node().appendChild(selectedPainting.node()); // Send back
        selectedPainting = null;

        d3.select(".panel") // Hide the panel
          .transition()
          .duration(300)
          .style("opacity", 0)
          .remove();

        return; // Exit function to prevent further execution
      }

      // If there's an already selected painting, reset it
      if (selectedPainting) {
        selectedPainting
          .transition()
          .duration(800)
          .attr("x", x(selectedPainting.datum().objectEndDate))
          .attr("width", 200)
          .attr("height", 200);

        d3.select("#paintings").node().appendChild(selectedPainting.node()); // Send back
      }

      // Set the new selected painting
      selectedPainting = clickedPainting;
      d3.select("#paintings").node().appendChild(selectedPainting.node()); // Bring to front

      const centerX = width / 2 - 300;

      // Apply scaling
      const scaleFactor = 1.5;
      const newWidth = 200 * scaleFactor;
      const newHeight = 200 * scaleFactor;

      d3.selectAll(".panel").remove();

      selectedPainting
        .transition()
        .duration(800)
        .attr("x", centerX)
        .attr("width", newWidth)
        .attr("height", newHeight);

      // Add the info panel
      const panel = d3
        .select("body")
        .append("div")
        .attr("class", "panel")
        .style("position", "absolute")
        .style("top", "50%")
        .style("left", `${centerX + 450}px`) // Adjusted for wider panel
        .style("transform", "translateY(-50%)")
        .style("max-width", "40vw")
        .style("max-height", "70vh")
        .style("overflow-y", "auto")
        .style("background", "#1e1f24")
        .style("color", "#c5c6d0")
        .style("padding", "30px 50px 30px 30px")
        .style("z-index", 1000)
        .style("box-shadow", "0px 4px 6px rgba(0,0,0,0.2)")
        .style("opacity", 0)
        .style("transition", "opacity 0.3s ease-in-out")
        .html(
          `<button id="closePanel" style="
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
          ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18" stroke="#c5c6d0" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 6L6 18" stroke="#c5c6d0" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
         <h3>${d.title}</h3>
         <h4 class="info-title">Artist</h4>
           <p class="info-text">${d.artistDisplayName}</p>
         <h4 class="info-title">Year</h4>
           <p class="info-text">${d.objectEndDate}</p>
         <h4 class="info-title">About</h4>
           <p class="info-text">${d.artistDisplayBio}</p>
         <h4 class="info-title">Credit</h4>
           <p class="info-text">${d.creditLine}</p>`
        )
        .transition()
        .duration(300)
        .style("opacity", 1);

      setTimeout(() => {
        d3.select("#closePanel").on("click", function () {
          d3.select(".panel")
            .transition()
            .duration(300)
            .style("opacity", 0)
            .remove();
        });
      }, 100);

      setTimeout(() => {
        d3.select("#closePanel").on("click", function () {
          d3.select(".panel")
            .transition()
            .duration(300)
            .style("opacity", 0)
            .remove();

          selectedPainting
            .transition()
            .duration(800)
            .attr("x", x(selectedPainting.datum().objectEndDate))
            .attr("width", 200)
            .attr("height", 200);

          d3.select("#paintings").node().appendChild(selectedPainting.node()); // Send back
          selectedPainting = null;
        });
      }, 100);
    });

  d3.select("svg").call(zoom);
}
