


export function renderData(detailed) {
    const list = document.querySelector('section ul');
    list.insertAdjacentHTML('beforeend',
    `<li>
        <img src="${detailed.primaryImage}">

     </li>`
    )

};