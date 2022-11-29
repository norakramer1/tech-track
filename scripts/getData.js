
let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

async function fetchPaintings(painting) {  
    const dataFetch = await fetch(`${API}/${painting}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }


 let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?&isHighlight=true&hasImages=true&q=painting&departmentId=11';
// let search = 'https://collectionapi.metmuseum.org/public/collection/v1/search?searchField=All&showOnly=openAccess&sortBy=relevance&pageSize=0&title=cat'
// search?isHighlight=true&q=sunflowers


// console.log('testing fetches');

// let requests = [];

// for(let i = 0; i < 5; i++) {
//     requests.push(fetch(search).then(data => data.json()))
// }

// Promise.all(requests).then(data => {
//     console.log(data);
// })

async function getObjectIds() {

    let res = await fetch(search);
    let data = await res.json();

    return data.objectIDs.splice(data.objectIDs.length-45);
//   
}

// &departmentId=11

export default {
    fetchPaintings: fetchPaintings,
    getObjectIds: getObjectIds
}