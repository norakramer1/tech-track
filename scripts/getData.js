import { renderData } from './render.js'


let API = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

export const fetchPaintings = async (id) => {  
    const dataFetch = await fetch(`${API}/${id}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }


let apiCat = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=cat';


   export let fetchObjectIds =  fetch(apiCat).then(function (response) {
    let firstTen;
        response.json().then(function (data) {
            console.log(data)
             firstTen = data.objectIDs.splice(data.objectIDs.length-10);
            console.log(firstTen)
            renderData(data)
      
        })
    }).catch(function (error) {
        console.log('Fetch Error:', error);
    });




