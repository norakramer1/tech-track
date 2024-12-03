// Base API URL
const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

// Fetch a painting's data
async function fetchPaintings(paintingId) {
  const localStorageKey = `painting_${paintingId}`;
  const cachedPainting = localStorage.getItem(localStorageKey);

  if (cachedPainting) {
    return JSON.parse(cachedPainting);
  }

  console.log(`Fetching painting data for ID: ${paintingId}`);
  const response = await fetch(`${API}/${paintingId}`);
  const jsonData = await response.json();

  // Save painting data to localStorage
  localStorage.setItem(localStorageKey, JSON.stringify(jsonData));
  return jsonData;
}

// Fetch object IDs (European Paintings department, filtered to max 50)
async function getObjectIds() {
  const localStorageKey = "objectIds";
  const cachedObjectIds = localStorage.getItem(localStorageKey);

  if (cachedObjectIds) {
    console.log("Using cached object IDs");
    return JSON.parse(cachedObjectIds);
  }

  console.log("Fetching object IDs from API");
  const searchUrl =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?&isHighlight=true&hasImages=true&q=painting&departmentId=11";
  const response = await fetch(searchUrl);
  const data = await response.json();

  const filteredObjectIds = data.objectIDs.slice(-50); // Take the last 50 IDs

  // Save object IDs to localStorage
  localStorage.setItem(localStorageKey, JSON.stringify(filteredObjectIds));
  return filteredObjectIds;
}

export default {
  fetchPaintings,
  getObjectIds,
};
