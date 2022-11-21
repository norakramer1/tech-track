

// import { renderD3 } from "./d3.js"

export function renderData(detailed) {
    const list = document.querySelector('section ul');
    list.insertAdjacentHTML('beforeend',
    `<li>
        <img src="${detailed.primaryImageSmall}">

        <h2>${detailed.objectName}</h2>
        <p>${detailed.title}</p>
        <h3>${detailed.artistEndDate}</h3>

     </li>`
    )

};