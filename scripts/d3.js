import * as d3 from 'd3';
import * as fetchPaintings from "./getData.js";
import getData from "./getData.js"



let dataSet = await getData.getObjectIds();

console.log(dataSet);





  // Een lineare schaal die de oppervlakte van de circel bepaalt
const sqrtScale = d3
.scaleSqrt()
.domain([0, d3.max(dataSet, (d) => d.cars)])
.range([0, 30]);

// Kleuren schaal lineair van rood naar donkerrood
const colorScaleLinear = d3
.scaleLinear()
.domain([0, d3.max(dataSet, (d) => d.cars)])
.range(["red", "darkred"]);

// Teken circels met de lineaire kleur schaal (kleurverloop)
d3.select("#scale1")
.selectAll("circle")
.data(dataSet)
.join("circle")
.attr("r", (d) => sqrtScale(d.cars))
.attr("cx", (d) => pointScale(d.day))
.attr("fill", (d) => colorScaleLinear(d.cars))
//Als je muis over een <circle> beweegt of tapt op een touchscreen, maken we de
//tooltip <div> zichtbaar en vullen deze met onze data
//D3 geeft je twee parameters mee voor events, die we
//hier e en d hebben genoemd. E bevat alle gegevens
//die je in elk javascript event krijgt, d bevat de data
//die gekoppeld is aan dit element
//D3 koppelt bij d3.join() namelijk de oorpsronkelijke data aan het DOM element
//Type maar eens document.querySelector("circle").__data__ in je console en je ziet het data object van de eerste circel in het diagram
.on("mouseover touchstart", (e, d) =>
  d3
    .select("#tooltip")
    .transition()
    .duration(175)
    .style("opacity", 1)
    .text(`${d.day}: ${d.cars} cars`)
)
//Als je muis beweegt over de <circle> passen we de positie
//van de tooltip <div> aan. We tellen er 15 pixels bij op,
//want we willen de tooltip naast je cursor en niet er onder
.on("mousemove", (e) =>
  d3
    .select("#tooltip")
    .style("left", e.pageX + 15 + "px")
    .style("top", e.pageY + 15 + "px")
)
//Als de muis weer buiten de <circle> beweegt, dan verbergen
//we de tooltip <div> weer
.on("mouseout", e => d3.select("#tooltip").style("opacity", 0)
);

//Als je ergens buiten de grafiek tapt op een touchscreen
//verbergen we ook de tooltip
d3.select("body").on("touchend", e => d3.select("#tooltip").style("opacity", 0));

//Voeg een as toe met de dagen van de week (afgekort)

const axisBottom = d3.axisBottom(pointScale).tickFormat((s) => s.slice(0, 2));

d3.select("#axis1").call(axisBottom);
