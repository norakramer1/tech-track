import { renderData } from './render.js'



export function getData() {

// let api = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/123';
let api = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers/13';

fetch(api).then(function(response){
    response.json().then(function(data) {
        console.log(data)
        renderData(data)
    })
}).catch(function(error) {
    console.log('Fetch Error:', error);
});

}