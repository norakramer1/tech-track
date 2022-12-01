

// Render response into HTML -> d3 handles this now so this is not used anywhere

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