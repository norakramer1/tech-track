// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'
// import { displayPaintings } from './getObjectIds.js'
// import { getObjectIds } from './getObjectIds.js'
import {
    displayPaintings
} from './getObjectIds.js'
// import * as d3 from 'd3';
const startRender = document.querySelector('a.start')

console.log(startRender)
startRender.addEventListener('click', (e) => {
    e.preventDefault();
    displayPaintings();
})



const x = document.querySelector('button.delete')



const panel = document.querySelector('div.panel')
if (x) {
    console.log(x)
    console.log(panel)
    x.addEventListener('click', () => {

        panel.style = 'opacity: 0'
        x.classList.toggle('toggle')
        // e.preventDefault();
    })

}