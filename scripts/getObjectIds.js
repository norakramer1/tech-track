import getData from "./getData.js"

 import * as fetchPaintings from "./getData.js";
import { renderData } from "./render.js"


let data = await getData.getObjectIds();

// console.log(data);


// let apiCat = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers';

//  const paintingsID =  fetch(apiCat).then(function (response) {
//     response.json().then(function (data) {
//         data.objectIDs.splice(data.objectIDs.length-10);
// //  renderData(data)
  
//     })
// });



export const displayPaintings = async () => {
    for (const id of data) {
        const aah = await getData.fetchPaintings(id)
        renderData(aah)
    }
}


