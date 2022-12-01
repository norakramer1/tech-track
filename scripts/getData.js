
// fetch object IDs
let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

async function fetchPaintings(painting) {  
    const dataFetch = await fetch(`${API}/${painting}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }

// For every objectId fetch its data with these parameters in the european paintings department
// filter results to max 50
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