# MET museum highlights

<img width="1233" alt="Screenshot 2022-12-01 at 18 26 26" src="https://user-images.githubusercontent.com/74241562/205119835-a2d862dc-d845-48c0-90a5-6d3a01e1d65b.png">


## Table of contents
- [What is the app](#what-is-it)
- [Interface](#picture-of-interface)
- [API](#rijksdata-api)
- [How to use this project](#how-to-use)
- [Features](#features)
- [Wishlist](#wishlist)
- [Code explaination](#code-explained)
- [License](#licence)

## What is it?
The MET Highights app is an interactive datavisualisation made using the d3.js library. It shows the user a scrollable timeline with images from the MET Museum's European Paintings department. The images are plotted on a timeline and by scrolling ans zooming you can explore different paintings that might be hidden. If you click on a painting it opens a panel that shows a larger image and some more information.

This WebApp is made with HTML, CSS, Javascript and d3.js.


## Picture of interface 
<img width="1253" alt="Screenshot 2022-12-01 at 18 25 35" src="https://user-images.githubusercontent.com/74241562/205119657-9b640e22-40ce-4d3d-a7f4-fd35833a6be9.png">

## Metropolitan Museum Of Art Open Access API

> Browse more than 492,000 Open Access works in The Online Collection by selecting the Open Access filter in search.

The Met’s Open Access datasets are available through our API. The API (RESTful web service in JSON format) gives access to all of The Met’s Open Access data and to corresponding high resolution images (JPEG format) that are in the public domain.

If you want to use the API you use the endpoint to request all object IDs. this returns all of them. By making a second request in which you fiter data by department, year, public domain or not, accesion year, images queries etc. etc. you request the object's data for every objectID you have.


## How to use
You can use this project to make something of your own.

1. Clone this repo
2. Run with `npm run dev` in your terminal
3. Use `npm run build` to build the app and make a dist folder for deployment
4. Open in your browser and watch the data roll in

## Features
This project is made using HTML, CSS, Javascript and d3.js. On entering all the objects get fetched and plotted on a timeline. The user can explore the data by zooming and scrolling. At this interaction the timeline moves and changes the years, the paintings move along with it. If you click on one you see the picture, title, maker, maker's bio and credits (who owns or gave the artwork to the MET).


## Wishlist
- Show a line from the timeline to the artwork to show year accuracy
- Fix commas in the years
- Improve buggy zoom function ( make it more smooth)
- Create loading state
- Improve d3.js code (modular)
- Make styling better (make it look nicer)



## Code explained
1. Get data, 
This function fetches the in depth data for every object ID you accuire in the first fetch. It runs async because it has to fetch for every objectID the previous fetch returns. After that it splices the objectIds into 50 so you don't request too many objects at once. Lastly the export is used to make both of the functions usable.


```javascript
   let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?&isHighlight=true&hasImages=true&q=painting&departmentId=11';

async function getObjectIds() {

    let res = await fetch(search);
    let data = await res.json();

    return data.objectIDs.splice(data.objectIDs.length-50);
 
}

export default {
    fetchPaintings: fetchPaintings,
    getObjectIds: getObjectIds
}

```

2. Get objects
This async function uses both of the functions we just made to request the objects that have all the data inside. It also filters out all responses that just display a message (that usually says the item was not found).

```
export const displayPaintings = async () => {
    // Await needs to be in an async function if it wants to
    let data = await getData.getObjectIds();

    const items = await Promise.all(data.map(id => {
        return getData.fetchPaintings(id);
    }))
// Filter out all repsonses that only display a message ( it means they do not exist or returned nothing)
    let filteredItems = items.filter(item => !item.message)
    // Console log of response
    //console.log(filteredItems);    
    
renderD3(filteredItems);

}

```
3. d3.js timeline zoom
This shows how you I made the timeline using d3.js and how the images move with the year. It first creates a new x axis that is used to zoom. It sets some settings for zoom extent etc. Then on zoom eventlistener it rescales the x axis and call the g tag that has the x axis in it. It also selects everything that has an ID of `#painting` and updates the `x attribute` with a parameter that is a function that uses the new x axis and the date the object was made. Then enters the images.

```
 // Zoom functionality
  let x2 = x;
  const xAxis = d3.axisBottom(x2);
  const xAxisG = svg.select("g")
    .call(xAxis);

  
  const zoom = d3.zoom()
    .scaleExtent([.5, 80]) // This control how much you can unzoom and zoom
    .extent([ [0, 0], [width, height] ]) 
    .on("zoom", function (event) {  // on zoom rescale x axis and update x position of all paintings
      x2 = event.transform.rescaleX(x);
      xAxisG.call(d3.axisBottom(x2));

  d3.selectAll("#painting")
    .attr('x', function (d) {
        return x2(d.objectEndDate);
        })
    })

// enter images in graph
  svg.append("g")
    .attr("id", "paintings")
    .attr("clip-path", "url(#clipPath)")
    .selectAll("dot")
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
```

## Licence
This project uses the [MIT](https://github.com/norakramer1/tech-track/blob/main/LICENSE) license
