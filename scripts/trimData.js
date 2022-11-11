
import {fetchObjectIds } from "./getData.js"

export const getTenObj = async () => {
    for (const data of paintingsID) {
        const ids = await fetchObjectIds(data)
         let firstTen = data.objectIDs.splice(data.objectIDs.length-10);
        renderData(ids)
    }
}