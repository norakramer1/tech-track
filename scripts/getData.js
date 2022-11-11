import { renderData } from './render.js'


let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

async function fetchPaintings(painting) {  
    const dataFetch = await fetch(`${API}/${painting}`)
    const jsonData = await dataFetch.json()
    console.log(jsonData)
    return jsonData
    }


 let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers';
// search?isHighlight=true&q=sunflowers


async function getObjectIds() {

    let res = await fetch(search);
    let data = await res.json();
    
    return data.objectIDs.splice(data.objectIDs.length-10);
  
}

export default {
    fetchPaintings: fetchPaintings,
    getObjectIds: getObjectIds,
    displayPaintings: displayPaintings
}