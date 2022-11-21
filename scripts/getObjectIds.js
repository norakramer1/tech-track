import getData from "./getData.js"

 import * as fetchPaintings from "./getData.js";
import { renderData } from "./render.js"
import { renderD3 } from "./d3.js";
// import { renderD3 } from "./d3.js"


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

    const items = await Promise.all(data.map(id => {
        return getData.fetchPaintings(id);
    }))

    let filteredItems = items.filter(item => !item.message)
    console.log(filteredItems);    
    
renderD3(filteredItems);

    
    // for (const id of data) {
    //     const aahaah.map(id => {
    //         return await getData.fetchPaintings(id)

    //     });

    //     //console.log(aah)
    //       renderData(aah)
    //       console.log(aah)
    //     //   console.log(typeof aah)
    
    // }
}

