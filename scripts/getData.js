
let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

async function fetchPaintings(painting) {  
    const dataFetch = await fetch(`${API}/${painting}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }


 let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&artistBeginDate=true&q=ghosts';
// search?isHighlight=true&q=sunflowers


async function getObjectIds() {

    let res = await fetch(search);
    let data = await res.json();

    return data.objectIDs.splice(data.objectIDs.length-25);
  
}

export default {
    fetchPaintings: fetchPaintings,
    getObjectIds: getObjectIds
}