
let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

async function fetchPaintings(painting) {  
    const dataFetch = await fetch(`${API}/${painting}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }


 let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?searchField=All&hasImages=true&q=green';
// search?isHighlight=true&q=sunflowers


async function getObjectIds() {

    let res = await fetch(search);
    let data = await res.json();

    return data.objectIDs.splice(data.objectIDs.length-45);
  
}

export default {
    fetchPaintings: fetchPaintings,
    getObjectIds: getObjectIds
}