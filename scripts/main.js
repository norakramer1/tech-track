// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.scss'
import { displayPaintings } from './getObjectIds.js'


displayPaintings();

const x = document.querySelector('button.delete')

if (x) {
  
    const panel = document.querySelector('div.panel')
    x.addEventListener('click', () => {
    
        panel.style = "opacity: 0"
        x.style = "opacity: 0"
        console.log(x)

    })

}