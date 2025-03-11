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
      if (selectedPainting) {
        // Reset the previously selected painting to its original size (200px)
        selectedPainting
          .transition()
          .duration(800)
          .attr("x", x(selectedPainting.datum().objectEndDate))
          .attr("width", 200)
          .attr("height", 200);
      }
      selectedPainting = d3.select(this);
      const paintingX = x(d.objectEndDate);
      const centerX = width / 2 - 300;

      // Calculate a percentage scale factor for the image (e.g., 1.5 means 150% of the original size)
      const scaleFactor = 1.5; // Set desired scaling factor here, e.g., 1.5 for 150%

      // Apply the scaling to the image size
      const newWidth = 200 * scaleFactor; // 200px is the initial width
      const newHeight = 200 * scaleFactor; // 200px is the initial height

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
        .style("left", `${centerX + 400}px`)
        .style("transform", "translateY(-50%)")
        .style("max-width", "400px")
        .style("max-height", "500px")
        .style("background", "#1e1f24") // Dark background to match the app
        .style("color", "#c5c6d0") // Light text color for contrast
        .style("padding", "20px")
        .style("z-index", 1000)
        .style("box-shadow", "0px 4px 6px rgba(0,0,0,0.2)") // Subtle shadow for the panel
        .style("border", "1px solid #c5c6d0") // Rounded corners to match the UI style
        .style("opacity", 0)
        .style("transition", "opacity 0.3s ease-in-out")
        .html(
          `<button id="closePanel" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 18px; cursor: pointer; color: #f4b942;">X</button>
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

          if (selectedPainting) {
            // Reset the painting to its original size and position
            selectedPainting
              .transition()
              .duration(800)
              .attr("x", x(selectedPainting.datum().objectEndDate)) // Reset position
              .attr("width", 200) // Reset width
              .attr("height", 200); // Reset height

            selectedPainting = null; // Clear selection
          }
        });
      }, 100);
    });

  d3.select("svg").call(zoom);
}
