import getData from "./getData.js"

 import * as fetchPaintings from "./getData.js";
import { renderData } from "./render.js"
import { renderD3 } from "./d3.js";
// import { renderD3 } from "./d3.js"


let data = await getData.getObjectIds();



export const displayPaintings = async () => {

    const items = await Promise.all(data.map(id => {
        return getData.fetchPaintings(id);
    }))

    let filteredItems = items.filter(item => !item.message)
    console.log(filteredItems);    
    
renderD3(filteredItems);

}


