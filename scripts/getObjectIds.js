import getData from "./getData.js"

// await getObjectIds response 
// Map over items when promise is resolved and for each results fetch data (name, image, discription)

export const displayPaintings = async () => {
    // Await needs to be in an async function if it wants to be deployable
    let data = await getData.getObjectIds();

    const items = await Promise.all(data.map(id => {
        return getData.fetchPaintings(id);
    }))
// Filter out all repsonses that only display a message ( it means they do not exist or returned nothing)
    let filteredItems = items.filter(item => !item.message)
    // Console log of response
    //console.log(filteredItems);    
    
renderD3(filteredItems);

}



