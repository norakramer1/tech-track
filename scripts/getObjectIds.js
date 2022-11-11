import {fetchPaintings } from "./getData.js"
import {fetchObjectIds } from "./getData.js"
import {renderData } from "./render.js"


export const displayPaintings = async () => {
    const paintingsID = firstTen;
    for (const id of paintingsID) {
        const data = await fetchPaintings(id)
        renderData(data)
    }
}