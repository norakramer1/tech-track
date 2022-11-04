// Our bundler automatically creates styling when imported in the main JS file!
import '../styles/style.css'
import { getData } from './getData.js'
import * as d3 from 'd3';

console.log('Hello, world!');

getData();

// https://collectionapi.metmuseum.org/public/collection/v1/objects
